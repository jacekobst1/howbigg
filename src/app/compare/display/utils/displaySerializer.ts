import Display from "../types/Display";

/**
 * Serializes Display instances to plain objects for passing from Server to Client Components
 * @param displays - Array of Display instances
 * @returns Plain object representation (automatically serialized by React)
 */
export function serializeDisplays(displays: Display[]): any[] {
  return displays.map(display => ({
    id: display.id,
    name: display.name,
    aspectRatio: display.aspectRatio,
    customAspectRatio: display.customAspectRatio,
    diagonal: display.diagonal,
    resolution: display.resolution,
    isVertical: display.isVertical,
    width: display.width,
    height: display.height,
    ppi: display.ppi,
    minOptimalViewDistance: display.minOptimalViewDistance,
    maxOptimalViewDistance: display.maxOptimalViewDistance,
    minViewDistance: display.minViewDistance,
    zIndex: display.zIndex,
    color: display.color,
  }));
}

/**
 * Deserializes plain objects to Display instances on the client side
 * @param plainObjects - Array of plain objects from server
 * @returns Array of Display instances with methods restored
 */
export function deserializeDisplays(plainObjects: any[]): Display[] {
  return plainObjects.map(obj => {
    const display = new Display(
      obj.id,
      obj.name,
      obj.aspectRatio,
      obj.customAspectRatio,
      obj.diagonal,
      obj.resolution,
      obj.isVertical,
      obj.width,
      obj.height,
      obj.ppi,
      obj.minOptimalViewDistance,
      obj.maxOptimalViewDistance,
      obj.minViewDistance,
      obj.zIndex,
      obj.color
    );
    return display;
  });
}
