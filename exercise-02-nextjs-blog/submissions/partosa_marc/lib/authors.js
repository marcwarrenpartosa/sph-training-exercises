import authorsData from '../data/authors.json';

export default function getAuthorDetailsById(id) {
  return authorsData.find(author => author.id === id);
}
