export function getImageSources(imageUrl: string) {
    const formats = ['webp', 'jpeg', 'png'];
    return formats.map((format) => ({
        src: `${imageUrl}`,
    }));
}