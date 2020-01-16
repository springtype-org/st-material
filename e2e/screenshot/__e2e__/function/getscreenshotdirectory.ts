
export const getScreenshotDirectory = (browserName: string, component: string) => {
    return `${browserName.toLowerCase()}/components/${component}/`;
} ;