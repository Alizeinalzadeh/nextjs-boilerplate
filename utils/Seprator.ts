export function Seprator(value: number | null | undefined) {
	if (value != null && !isNaN(+value)) {
		return value
			.toString()
			.replace(/[^0-9]/g, '')
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}
