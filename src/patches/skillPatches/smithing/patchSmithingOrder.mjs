export function patchSmithingOrder() {
  const catsReg = game.smithing.categories;
  const silverGearID = 'expandedAreas:SilverGear';
  const silverGearObject = catsReg.getObjectSafe(silverGearID);

  const oldMap = catsReg.registeredObjects;
  const newMap = new Map();

  console.log(silverGearID);

  for (const [id, obj] of oldMap) {
    newMap.set(id, obj);

    if (obj.id == "melvorD:RuneGear") {
      newMap.set(silverGearID, silverGearObject);
    }

  }

  catsReg.registeredObjects = newMap;

}