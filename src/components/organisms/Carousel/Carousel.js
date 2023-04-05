import * as React from "react";
import { Card } from "../../molecules";

const styles = {
  parentContainer: {
    display: "flex",
  },
};

export const Carousel = ({ items }) => {
  return (
    <div style={styles.parentContainer}>
      {items.map((item) => {
        return (
          <Card
            icon={item.icon}
            tag={item.tag}
            header={item.header}
            text={item.paragraph}
          />
        );
      })}
    </div>
  );
};
