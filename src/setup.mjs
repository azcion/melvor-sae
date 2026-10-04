export async function setup(ctx) {

  const { addThievingNPCs } = await ctx.loadModule('src/patches/skillPatches/thieving/addThievingNPCs.mjs');

  const { patchCraftingOrder } = await ctx.loadModule('src/patches/skillPatches/crafting/patchCraftingOrder.mjs');

  const { patchSmithingOrder } = await ctx.loadModule('src/patches/skillPatches/smithing/patchSmithingOrder.mjs');

  ctx.onModsLoaded(async (ctx) => {

    addThievingNPCs();
    patchCraftingOrder();
    patchSmithingOrder();
  });

  // await ctx.patch(Skill, 'maxLevelCap').get(function () { return 1000; });

  await ctx.onCharacterLoaded(async (ctx) => {
    mod.api.mythCombatSimulator?.registerNamespace('expandedAreas');
  });
}