import React from "react";

const FooterColumnList = (props) => {
  const { footerList, showMore } = props;
  return (
    <>
      {!showMore
        ? footerList.slice(0, 6).map((list, index) => (
            <li className="my-5" key={index}>
              <a href={list.link}>{list.text}</a>
            </li>
          ))
        : footerList.map((list, index) => (
            <li className="my-5" key={index}>
              <a href={list.link}>{list.text}</a>
            </li>
          ))}
    </>
  );
};

export default FooterColumnList;
