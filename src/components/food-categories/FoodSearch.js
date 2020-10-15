import React, { useState, useEffect } from 'react';
import { Icon } from "@material-ui/core";
import { FormattedMessage ,injectIntl} from "react-intl";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import TimeList from "components/widgets/TimeList";



const now = <FormattedMessage id="home.catalog.Now" defaultMessage="Now" />;
const delivery = (
  <FormattedMessage id="home.catalog.Delivery" defaultMessage="Delivery" />
);
const searchPlace = [
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
];
const FoodSearch = ({ setSearchText, openMenu, selectedItem, intl }) => {
      const search = {
    input: intl.formatMessage({
      id: "home.catalog.SearchInput",
      defaultMessage: "Name, cuisine or dish",
    }),
  };

  const timeClick = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { list: "w-full p-0" },
    });
  };

  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const inputChange = (event) => setInput(event.target.value);

  useEffect(() => {
    if (input === "") {
      setOptions([]);
      return undefined;
    }
    const result = searchPlace.filter(
      (item) => item.name.toLocaleLowerCase().indexOf(input) > -1
    );

    setOptions(result);
  }, [input]);
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    getOptionLabel: (option) => option.name,
    options: options,
    clearOnEscape: true,
    onInputChange: inputChange,
  });
    return (
         <div className="food__search-box">
      <div
        className=
          "flex flex-row flex-no-wrap h-20 items-center rounded bg-white"
      >
        <div {...getRootProps()} className="food__search-box--input w-11/12 h-full flex flex-no-wrap "
           >
          <Icon className="mx-4 my-auto">search</Icon>
          <input
            {...getInputProps()}
            placeholder={search.input}
            className="w-full"
          />
        </div>
        <div className="food__time-box" onClick={timeClick}>
          <Icon className="mx-4">access_time</Icon>
          <div className="text-black">
            {delivery} :{selectedItem === null ? now : selectedItem}
          </div>
          <Icon className="mx-4">keyboard_arrow_down</Icon>
        </div>
      </div>
      <ul className="food__suggestion--list" {...getListboxProps()}>
        {groupedOptions.map((option, index) => (
          <li
            {...getOptionProps({ option, index })}
            className="food__suggestion--item"
            key={index}
          >
            <div className="food__suggestion--bg-image">
              <img
                src={option.image}
                className="food__suggestion--image"
                alt={option.name}
              />
            </div>
            <div className="food__suggestion--text">
              <div className="font-bold text-xl leading-tight">
                {option.name}
              </div>
              <ul className="food__suggestion--Tag">
                {option.tags.map((tag) => (
                  <li className="text-sm mr-3" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
 
    );
};

export default injectIntl(FoodSearch);