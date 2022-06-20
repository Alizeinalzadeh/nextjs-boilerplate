export const removeTagFromString = (sentence: string) => {
    return sentence.replace(/<[^>]+>/g, '');
}