export function validateTag(tag, newTags) {
  const newTag = tag.toLowerCase().trim();

  if (/\p{P}+/u.test(newTag) || /\s+/.test(newTag)) {
    throw new SyntaxError('please enter only letters and numbers');
  }

  if (newTags.includes(`#${newTag}`)) {
    throw new SyntaxError('this tag is already in the list');
  }

  if (newTag.length === 0) {
    throw new SyntaxError('min. length is one character');
  }

  return newTag;
}

export function validateFilterTag(tag) {
  if (tag.length === 0) {
    return tag;
  }

  const newTag = tag.toLowerCase().trim();

  if (/\p{P}+/u.test(newTag) || /\s+/.test(newTag)) {
    throw new SyntaxError('please enter only letters and numbers');
  }

  return newTag;
}
