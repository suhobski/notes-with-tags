import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Tag from './Tag';
import TagListWrap from './TagListWrap';
import { changeFilterVisibility, setTag } from '../store/actions/filter';

const TagList = ({ tags, setFilterTag, changeVisibility }) => {
  const findTag = (tag) => {
    console.log(tag.slice(1));
    changeVisibility(true);
    setFilterTag(tag.slice(1));
  };

  return (
    <TagListWrap>
      {tags?.length > 0 &&
        tags.map((tag) => (
          <Tag key={tag} onClick={() => findTag(tag)}>
            {tag}
          </Tag>
        ))}
    </TagListWrap>
  );
};

TagList.defaultProps = {
  tags: [],
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  setFilterTag: PropTypes.func.isRequired,
  changeVisibility: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setFilterTag: (tag) => dispatch(setTag(tag)),
    changeVisibility: (filterVisibility) =>
      dispatch(changeFilterVisibility(filterVisibility)),
  };
}

export default connect(null, mapDispatchToProps)(TagList);
