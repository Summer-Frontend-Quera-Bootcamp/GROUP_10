import { BiSearch } from "react-icons/bi";
import { SimpleTag, TagEdit } from "../../Tags";
import { useRef, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { useDetectClickOutside } from "react-detect-click-outside";

interface tag {
  title: string;
  color:
    | "red"
    | "pink"
    | "grape"
    | "violet"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "brand"
    | "green"
    | "yellow"
    | "lime"
    | "orange";
}

type tags = tag[];

export const TagSearch = () => {
  const [tags, setTags] = useState<tags>([
    { title: "riazi", color: "yellow" },
    { title: "shimi", color: "red" },
    { title: "armaan", color: "lime" },
    { title: "hello", color: "grape" },
    { title: "hi", color: "brand" },
    { title: "yes!", color: "orange" },
    { title: "amir", color: "cyan" },
    { title: "sina", color: "pink" },
    { title: "bootcamp", color: "indigo" },
    { title: "code", color: "violet" },
  ]);

  const [selectedTags, setSelectedTags] = useState<tags>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [tagClick, setTagClick] = useState<tag>({
    title: "test",
    color: "orange",
  });
  const [showMore, setShowMore] = useState(false);
  const [searchTag, setSearchTag] = useState<tags>(
    tags.filter((tag: tag) => {
      if (!selectedTags.includes(tag)) {
        return tag;
      }
    })
  );
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setIsOpen(false);
    },
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (text: string) => {
    tags.forEach((tag: tag) => {
      if (tag.title === tagClick.title) {
        tag.title = text.trim();
      }
    });
    setShowMore(false);
  };
  const handleColor = (
    color:
      | "red"
      | "pink"
      | "grape"
      | "violet"
      | "indigo"
      | "blue"
      | "cyan"
      | "teal"
      | "brand"
      | "green"
      | "yellow"
      | "lime"
      | "orange"
  ) => {
    tags.forEach((tag: tag) => {
      if (tag.title === tagClick.title) {
        tag.color = color;
      }
    });
    setShowMore(false);
  };
  const handleDelet = () => {
    tags.forEach((tag: tag) => {
      if (tag.title === tagClick.title) {
        tags.splice(tags.indexOf(tagClick), 1);
      }
      setSearchTag(
        tags.filter((tag: tag) => {
          if (!selectedTags.includes(tag)) {
            return tag;
          }
        })
      );
      setSelectedTags(
        tags.filter((tag: tag) => {
          if (selectedTags.includes(tag)) {
            return tag;
          }
        })
      );
    });
    setShowMore(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(
      tags.filter((tag: tag) => {
        if (tag.title.includes(event.target.value)) {
          return tag;
        }
      })
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      inputRef.current !== null &&
      searchTag.length === 0
    ) {
      const tag: tag = {
        title: inputRef.current.value.trim(),
        color: "orange",
      };
      setTags([...tags, tag]);
      setSelectedTags([...selectedTags, tag]);
      setSearchTag(
        tags.filter((tag: tag) => {
          if (!selectedTags.includes(tag)) {
            return tag;
          }
        })
      );
      inputRef.current.value = "";
    }
  };

  return (
    isOpen && (
      <div
        ref={ref}
        className="w-[250px] p-s flex flex-col shadow-xl rounded-md relative"
      >
        {showMore && (
          <TagEdit
            onEdit={handleEdit}
            onColor={handleColor}
            onDelete={handleDelet}
          />
        )}
        {selectedTags.length !== 0 && (
          <div className="flex flex-row-reverse flex-wrap mb-xs">
            {selectedTags.map((tag: tag) => (
              <span
                key={tag.title}
                onClick={() => {
                  setShowMore(true);
                  setTagClick(tag);
                }}
              >
                <SimpleTag title={tag.title} color={tag.color} />
              </span>
            ))}
          </div>
        )}
        <div className="relative">
          <BiSearch
            size="25"
            className="text-gray-primary absolute top-[5px] left-[190px]"
          />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-gray-secondary rounded-md h-[35px] text-right pr-l"
            placeholder="جستجو یا ساختن تگ"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        <div className="flex flex-col mt-m overflow-auto max-h-[150px]">
          {searchTag.length !== 0 ? (
            searchTag.map((tag: tag) => (
              <div
                className="flex flex-row-reverse items-center hover:bg-slate-100"
                key={tag.title}
              >
                <span
                  onClick={() => {
                    selectedTags.push(tag);
                    setSearchTag(
                      tags.filter((tag: tag) => {
                        if (!selectedTags.includes(tag)) {
                          return tag;
                        }
                      })
                    );
                  }}
                >
                  <SimpleTag title={tag.title} color={tag.color} />
                </span>
                <TfiMoreAlt
                  className="text-gray-primary mr-auto ml-xs cursor-pointer"
                  onClick={() => {
                    setShowMore(true);
                    setTagClick(tag);
                  }}
                />
              </div>
            ))
          ) : (
            <p className="text-right overflow-hidden">
              اینتر بزنید {inputRef.current !== null && inputRef.current.value}{" "}
              برای ساختن
            </p>
          )}
        </div>
      </div>
    )
  );
};
