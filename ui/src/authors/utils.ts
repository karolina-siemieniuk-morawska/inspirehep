import { List, Map } from 'immutable';
import { makeCompliantMetaDescription } from '../common/utils';

export function getCurrentAffiliationsFromPositions(
  positions: List<any>
) {
  return positions.filter((position: Map<string, any>) => position.get('current'));
}

export function getAuthorDisplayName(name: Map<string, string>) {
  const preferredName = name.get('preferred_name');

  if (preferredName) {
    return preferredName;
  }

  const nameValue = name.get('value');
  const splittedByComma = (nameValue as string).split(', ');
  return splittedByComma.length === 2
    ? `${splittedByComma[1]} ${splittedByComma[0]}`
    : nameValue;
}

export function getAuthorMetaDescription(author: {
  getIn: (
    arg: string[],
    list: List<string>
  ) => { get: (arg: string) => string }[];
  get: (
    arg: string,
    list: List<string>
  ) => Map<string, string>;
}) {
  const ITEM_SEPARATOR = ' and ';

  const nativeNamesText = author
    .getIn(['name', 'native_names'], List())
    .filter(Boolean)
    .join(ITEM_SEPARATOR);
  const affiliationsText = getCurrentAffiliationsFromPositions(
    author.get('positions', List([])) as unknown as List<any>
  )
    .map((position) => (position as unknown as Map<string, string>).get('institution'))
    .filter(Boolean)
    .join(ITEM_SEPARATOR);
  const categoriesText = author
    .get('arxiv_categories', List())
    .filter(Boolean)
    .join(ITEM_SEPARATOR);
  const experimentsText = author
    .get('project_membership', List())
    .map((experiment) => (experiment as unknown as Map<string, string>).get('name'))
    .filter(Boolean)
    .join(ITEM_SEPARATOR);

  const sentences = [
    nativeNamesText,
    affiliationsText,
    categoriesText,
    experimentsText,
  ];

  const description = sentences.filter(Boolean).join('. ');

  return makeCompliantMetaDescription(description);
}
