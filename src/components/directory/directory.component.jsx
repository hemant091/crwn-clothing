import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";


const Directory = ({sections}) =>  {
  return (
          <div className="directory-menu">
                { sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))}
          </div>
        )};


const mapStateToProps = state => ({
  sections: selectSections(state)
})

export default connect(mapStateToProps)(Directory);