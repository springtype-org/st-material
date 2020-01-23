import {IManipulatedAttribute} from "../interface/iManipulatedAttribute";
import {IAttributes} from "../interface/iAttributes";
import {IManipulationSVGResult} from "../interface/imanipulationsvgresult";

export const ICON_CLASS_PRIMARY_COLOR = "material-icon primary-color";
export const ICON_CLASS_SECONDARY_COLOR = "material-icon secondary-color";

const manipulateAttributesForSVg = (attributes: IAttributes, parent: string, level: number): IManipulatedAttribute => {
    //delete unused ids and classes
    delete attributes.id;
    delete attributes.class;
    delete attributes['clip-path'];

    let usePrimaryColor = false;
    let useSecondaryColor = false;
    if (Object.keys(attributes).length > 0) {
        switch (parent) {
            case 'svg':
                attributes['class'] = 'material-icon';
                delete attributes['x'];
                delete attributes['y'];
                delete attributes['width'];
                delete attributes['height'];

                delete attributes['xmlSpace'];
                delete attributes['enable-background'];
                break;
            case 'path':
            case 'g':
            case 'circle':
            case 'rect':
            case 'polygon':
            case 'cliPath':
            case 'polyline':
                if (attributes.fill && attributes.fill === 'none') {
                    break;
                }
                if (attributes.opacity) {
                    delete attributes.opacity;
                    attributes.class = ICON_CLASS_SECONDARY_COLOR;
                    useSecondaryColor = true;
                } else {
                    attributes.class = ICON_CLASS_PRIMARY_COLOR;
                    usePrimaryColor = true;
                }
                break;
        }
    }
    for (const attrName of Object.keys(attributes)) {
        attributes[attrName] = attributes[attrName].trim();
    }
    return {attributes: attributes, usePrimaryColor: usePrimaryColor, useSecondaryColor: useSecondaryColor};
};

const manipulateAttributes = (attributes: IAttributes, parent: string, level: number): IManipulatedAttribute => {
    const manipulatedAttribute: any = {};
    for (let attributeName of Object.keys(attributes)) {
        const attrName = attributeName.split(':').map((att, index) => {
            if (index == 0) {
                return att;
            }
            return att.substring(0, 1).toUpperCase() + att.substring(1);
        }).join('');
        manipulatedAttribute[attrName] = attributes[attributeName];
    }
    return manipulateAttributesForSVg(manipulatedAttribute, parent, level);
};

export const manipulatexml = (xml: any, parent: string | undefined = undefined, level: number = 0): IManipulationSVGResult => {
    const resultXml: any = {};
    let usedPrimaryColor = false;
    let usedSecondaryColor = false;
    for (let xmlKey of Object.keys(xml)) {
        if (xmlKey === 'clipPath') {
            continue;
        }
        //is Attribute
        if (xmlKey == '$') {
            const attributes = manipulateAttributes(xml[xmlKey], parent!, level);
            if (Object.keys(attributes).length < 1) {
                continue;
            }
            resultXml[xmlKey] = attributes.attributes;
            if (attributes.usePrimaryColor) {
                usedPrimaryColor = true;
            }
            if (attributes.useSecondaryColor) {
                usedSecondaryColor = true;
            }
        } else {
            const _value = xml[xmlKey];
            if (Array.isArray(_value)) {
                const array = [];
                for (let i = 0; i < _value.length; i++) {
                    const value = _value[i];
                    const manipulationResult = manipulatexml(value, xmlKey, level);
                    if (manipulationResult) {
                        array[i] = manipulationResult.xmlJson;
                        if (manipulationResult.usePrimaryColor) {
                            usedPrimaryColor = true;
                        }
                        if (manipulationResult.useSecondaryColor) {
                            usedSecondaryColor = true;
                        }
                    }
                }
                if (array.length > 0) {
                    resultXml[xmlKey] = array;
                }
            } else {
                const manipulationResult = manipulatexml(_value, xmlKey, level + 1);
                if (manipulationResult) {
                    resultXml[xmlKey] = manipulationResult.xmlJson;
                    if (manipulationResult.usePrimaryColor) {
                        usedPrimaryColor = true;
                    }
                    if (manipulationResult.useSecondaryColor) {
                        usedSecondaryColor = true;
                    }
                }
            }
        }
    }
    return {xmlJson: resultXml, usePrimaryColor: usedPrimaryColor, useSecondaryColor: usedSecondaryColor};
};





