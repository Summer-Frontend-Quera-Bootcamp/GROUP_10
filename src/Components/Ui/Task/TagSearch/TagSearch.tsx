import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SimpleTag, TagEdit } from "../../Tags";
import { TfiMoreAlt } from "react-icons/tfi";
import { useClickAway } from "@uidotdev/usehooks";

// Define the interface for tag objects
interface Tag {
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

// Define the component props interface
interface Props {
  onData: (data: Tag[]) => void;
}

const TagSearch: React.FC<Props> = ({ onData }) => {
  const [tags, setTags] = useState<Tag[]>([
    // Initial tags data
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

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [tagClick, setTagClick] = useState<Tag>({
    title: "",
    color: "orange",
  });
  const [showMore, setShowMore] = useState(false);
  const [searchTag, setSearchTag] = useState<Tag[]>(tags);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
    onData(selectedTags);
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to handle tag editing
  const handleEdit = (text: string) => {
    // Update tag title
    tags.forEach((tag: Tag) => {
      if (tag === tagClick) {
        const trimmedText = text.trim();
        const tagExists = tags.some(
          (existingTag) => existingTag.title === trimmedText
        );
        if (!tagExists) {
          tag.title = trimmedText;
        }
      }
    });
    setShowMore(false);
  };

  // Function to handle tag color change
  const handleColor = (color: Tag["color"]) => {
    // Update tag color
    tags.forEach((tag: Tag) => {
      if (tag.title === tagClick.title) {
        tag.color = color;
      }
    });
    setShowMore(false);
  };

  // Function to handle tag deletion
  const handleDelete = () => {
    // Delete the selected tag
    tags.forEach((tag: Tag) => {
      if (tag.title === tagClick.title) {
        tags.splice(tags.indexOf(tagClick), 1);
      }
      setSearchTag(
        tags.filter((tag: Tag) => {
          if (!selectedTags.includes(tag)) {
            return tag;
          }
        })
      );
      setSelectedTags(
        tags.filter((tag: Tag) => {
          if (selectedTags.includes(tag)) {
            return tag;
          }
        })
      );
    });
    setShowMore(false);
  };

  // Function to handle input change for tag search
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the filtered tags based on the input value
    setSearchTag(
      tags.filter((tag: Tag) => {
        if (tag.title.includes(event.target.value)) {
          return tag;
        }
      })
    );
  };

  // Function to handle Enter key press for tag creation
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      inputRef.current !== null &&
      searchTag.length === 0
    ) {
      const tag: Tag = {
        title: inputRef.current.value.trim(),
        color: "orange",
      };
      setTags([...tags, tag]);
      setSelectedTags([...selectedTags, tag]);
      setSearchTag(
        tags.filter((tag: Tag) => {
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
        className="w-[250px] bg-white p-s flex flex-col shadow-xl rounded-md relative"
      >
        {showMore && (
          <TagEdit
            onEdit={handleEdit}
            onColor={handleColor}
            onDelete={handleDelete}
          />
        )}

        {selectedTags.length !== 0 && (
          <div className="flex flex-row-reverse flex-wrap mb-xs">
            {selectedTags.map((tag) => (
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

        <div className="flex flex-col mt-m overflow-auto scroll-w-thin max-h-[150px] scrollbar-thumb-white scrollbar-track-gray-200">
          {searchTag.length !== 0 ? (
            searchTag.map((tag) => (
              <div
                className="flex flex-row-reverse items-center hover:bg-slate-100"
                key={tag.title}
              >
                <span
                  onClick={() => {
                    selectedTags.push(tag);
                    setSearchTag(
                      tags.filter((t: Tag) => !selectedTags.includes(t))
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

export default TagSearch;
