import React from 'react';
import { PropTypes } from 'prop-types';
import TagListWrap from '../../../components/UI/TagListWrap';
import Tag from '../../../components/UI/Tag';
import ButtonDeleteTag from '../../../components/ButtonDeleteTag';

export default function ModifyTagList({ tags, deleteTag }) {
  return (
    <TagListWrap>
      {tags?.length > 0 &&
        tags.map((tag) => (
          <Tag key={tag} onClick={() => deleteTag(tag)}>
            {tag}
            <ButtonDeleteTag deleteTag={() => deleteTag(tag)} />
          </Tag>
        ))}
    </TagListWrap>
  );
}

ModifyTagList.defaultProps = {
  tags: [],
  deleteTag: null,
};

ModifyTagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  deleteTag: PropTypes.func,
};
