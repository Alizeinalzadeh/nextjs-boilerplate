import DOMPurify from 'dompurify';

export function Clean(content: string) {
	const CLEANED = DOMPurify.sanitize(content);
	return CLEANED;
}
