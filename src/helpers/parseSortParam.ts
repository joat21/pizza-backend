const validSortFields = ['minPrice', 'title', 'rating'];

export const parseSortParam = (
  sortBy: string
): { [field: string]: 'asc' | 'desc' } => {
  if (!sortBy) {
    return { rating: 'desc' };
  }

  const isDesc = sortBy.startsWith('-');
  const field = isDesc ? sortBy.slice(1) : sortBy;

  if (!validSortFields.includes(field)) {
    return { rating: 'desc' };
  }

  return { [field]: isDesc ? 'desc' : 'asc' };
};
