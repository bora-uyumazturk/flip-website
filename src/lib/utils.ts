interface Vector2D {
  x: number;
  y: number;
}

export const coordinatesToDirection = ({
  coordinates,
  dimensions,
}: {
  coordinates: Vector2D;
  dimensions: Vector2D;
}): "top" | "left" | "bottom" | "right" => {
  const slope = dimensions.y / dimensions.x;
  if (
    coordinates.y <= slope * coordinates.x &&
    coordinates.y > -slope * coordinates.x
  ) {
    return "right";
  } else if (
    coordinates.y > slope * coordinates.x &&
    coordinates.y >= -slope * coordinates.x
  ) {
    return "top";
  } else if (
    coordinates.y < -slope * coordinates.x &&
    coordinates.y >= slope * coordinates.x
  ) {
    return "left";
  } else {
    return "bottom";
  }
};

export const updateAngle = ({
  angle,
  direction,
}: {
  angle: { x: number; y: number };
  direction: "top" | "left" | "bottom" | "right";
}): Vector2D => {
  if (direction === "left") {
    return {
      x: angle.x,
      y: angle.x % 2 ? angle.y + 1 : angle.y - 1,
    };
  } else if (direction === "right") {
    return {
      x: angle.x,
      y: angle.x % 2 ? angle.y - 1 : angle.y + 1,
    };
  } else if (direction === "top") {
    return { x: angle.x + 1, y: angle.y };
  } else {
    return { x: angle.x - 1, y: angle.y };
  }
};
