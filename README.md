# Oddventurers browser prototype v0.5

This is the phone-first browser prototype for **Oddventurers**, updated to reflect **Master Game Design v0.3**.

Current prototype focus:

- Each player builds one Oddventurer from **Head / Body / Legs / Extra**.
- Every part uses **Part name → named Ability → broad natural-language capability**.
- Character creation uses **draw 2 / keep 1** for every slot.
- The adventure is revealed only after all characters are built.
- Abilities begin **Ready** and become **Worn Out** when used to solve a challenge.
- A shared **6-space Trouble track** is the current prototype loss condition.
- Players may deliberately take Trouble rather than wear out a useful ability.
- Recharge opportunities are scarce and authored into the adventure.
- No dice, statistics, equipment system or generic Item deck.
- Each run uses **3 connected locations**, roughly **2 challenges per location**, with a **3-stage finale at Location 3**.
- Location scenes are reusable visual problem-spaces and can be tapped to inspect full-screen.
- Player-facing challenges do not show legal answers. A hidden designer reference exists only for rulings and is explicitly not a whitelist.
- Two current Adventure premises reuse the same three locations with different story reasons and objectives.

The service worker remains intentionally disabled/unregistered during prototyping to avoid stale iOS/Safari builds.
