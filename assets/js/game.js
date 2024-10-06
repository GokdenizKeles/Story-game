let storyStart = prompt(
  "Hey adventurer, how about playing a game?\n Yes or no?"
);

if (storyStart === "yes" || storyStart === "YES" || storyStart === "Yes") {
  alert("Good choice, you’ve got great taste! Now, wake up AND START WALKING!");
  alert(
    "Without understanding what’s happening, you suddenly wake up with a sharp pain in your throat, as if someone had placed a knife against it. When you open your eyes, you realize you're on a ship. It feels like someone woke you up—no, you're almost certain of it."
  );
  let explore = prompt(
    "Now what are you going to do? You're hungry and thirsty, and the ship is stranded on the shore. So now, MAKE YOUR CHOICE.\n 1. Explore the ship and search for the person who tried to wake you up.\n 2. Go ashore to the island where the ship has run aground and explore the island."
  );
  if (explore === "1") {
    alert(
      "While searching the ship, you found some water and food, but there was no trace of the person who tried to wake you. The air chambers of the ship appeared to be deflated, meaning this ship could no longer float. (You hear a creaking sound.) What was that? It sounded like wood creaking."
    );
    let look = prompt(
      "Now make your choice.\n 1. Check the creaking sound coming from the ship.\n 2. Run away from the ship."
    );
    if (look === "1") {
      alert(
        "You headed towards the source of the creaking sound, and what do you know—a bandit acted faster than you and slashed your throat with a knife. Just then, you lost consciousness and realized that the pain in your throat was the same as when you first woke up. You learned that the person you thought was trying to wake you up was actually a bandit. Now, because of your own curiosity, YOU ARE DEAD. Remember, too much curiosity is not good."
      );
      // eleman.classList.add("container");
      // eleman.classList.remove("container ");
    } else if (look === "2") {
      alert(
        "You were scared by that creaking sound and quickly fled from the ship, running like a frightened chicken. You ran so fast that you found yourself deep in the forest, where you are now essentially prey for the predators."
      );
      alert(
        "As you venture further into the forest, you see a man without an arm. It seems he is trying to bandage the wound on his arm with leaves."
      );
      alert(
        "Wait a moment. As you approach to help the man, you realize THIS MAN IS ACTUALLY YOU. Suddenly, a voice appears in your head, saying, 'KILL HIM.'"
      );
      let escapeArc = prompt( 
        "Now make your choice.\n 1. Kill him.\n 2. Do nothing."
      );
      if (escapeArc === "1") {
        alert(
          "You killed him, but it seems that in doing so, you were wounded as well. Like a mirror, you both killed each other. How foolish."
        );
        alert("thx for playing my game");
      } else if (escapeArc === "2") {
        alert(
          "You did nothing, but he attacked you, and now you both are dead again. It seems you are a complete fool."
        );
        alert("thx for playing my game");
      } else {
        alert("Nice , Try");
    }
  }

    // 2
  } else if (explore === "2") {
    alert(
      "You stepped off the ship and onto the island, the sand feeling warm and pleasant beneath your feet. But as you looked a little closer, you noticed bodies buried in the sand—these were the remains of your crew. No, they weren’t whole corpses; these were body parts."
    );
    let bury = prompt(
      "Now make your choice.\n 1.Gather the body parts and bury them.\n 2. Say that there's nothing you can do for them and start looking for food on the island."
    );
    if (bury === "1") {
      alert(
        "As you were burying the bodies, wild animals attracted by the smell of blood came and ate you along with the corpses. In times like these, you should only think of yourself, fool."
      );
    } else if (bury === "2") {
      alert(
        "Yes, while searching for food in the forest, you finally found something to eat and quickly put it in your mouth. But it seems that what you ate was poisonous. Your head starts to spin slowly; you should have checked it before eating. Eventually, you can't take it anymore and lose consciousness in the middle of the forest."
      );
      alert("A day later.");
      alert(
        "You finally wake up, but something is missing—YES, YOU DON'T HAVE AN ARM. It seems that one of the predators tore your arm off. YOU NEED TO BE QUICK; YOU MUST STOP THE BLEEDING BEFORE YOU DIE."
      );
      let injured = prompt(
        "Now make your choice.\n 1. Be quick and try to bandage the wound.\n 2. Give up and accept death."
      );
      if (injured === "1") {
        alert("You quickly gather a few leaves and try to bandage the wound.");
        alert(
          "As you try to bandage your arm with leaves, you see someone approaching you. At first, you can't tell if they are human because they are too far away, but as they continue to get closer, you realize THAT PERSON IS ACTUALLY YOU."
        );
        alert("And a voice echoed in your head, saying the words, 'KILL HIM.'");
      } 
      else if (injured === "2" ) {
        
        alert(
          "It seems you died from the bleeding. What a shame; it was too early to give up."
        );
        
        let kill = prompt("Now make your choice.\n 1. Kill him.\n 2. Do nothing.");
        if (kill === "1") {
          alert(
            "You killed him, but it seems that in doing so, you were wounded as well. Like a mirror, you both killed each other. How foolish."
          );
          alert("thx for playing my game");
        } else if (kill === "2") {
          alert(
            "You did nothing, but he attacked you, and now you both are dead again. It seems you are a complete fool."
          );
          alert("thx for playing my game");
      }
    }
      
  }
} else {
    alert("Nice , Try");
  }
} else if (storyStart === "no" || storyStart === "NO" || storyStart === "No") {
  alert("I GET IT, THEN DIE HERE!");
  alert(
    "You were actually unconscious on the ship the whole time. A bandit slit your throat with a knife, and now you're dead. It seems you’ve disappointed my hopes. Giving you a chance to live was a complete waste of time."
  );
} else {
  alert("Nice,Try");
}
