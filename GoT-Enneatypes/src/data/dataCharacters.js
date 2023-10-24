const dataCharacters = [
  {
    id: 6,
    name: "Ned Stark",
    enneatype: "The Perfectionist",
    description: "Ned Stark, the head of House Stark, embodies the Enneatype 1, known as 'The Perfectionist.' His unwavering commitment to honor and justice drives him to maintain the highest moral standards. Ned is the beacon of integrity and righteousness in the unpredictable world of Westeros.",
    strength: "Ned Stark's unwavering dedication to honor and justice strengthens his integrity and moral code. His commitment to doing what's right, no matter the cost, earns him the respect and trust of those who follow him.",
    weakness: "However, Ned's unwavering moral code can lead to inflexibility and, at times, a lack of pragmatism. This rigidity can put him in precarious situations, especially in the treacherous world of Westeros."
  },
  {
    id: 18,
    name: "Stannis Baratheon",
    enneatype: "The Perfectionist",
    description: "Stannis Baratheon, the self-proclaimed rightful king of Westeros, is another example of an Enneatype 1, 'The Perfectionist.' His rigid adherence to the rules and law makes him a formidable leader, though not without its challenges.",
    strength: "Stannis Baratheon is another example of a perfectionist. He is rigid in his adherence to the rules and law, often to his own detriment.",
    weakness: "Yet, his strict adherence to the law can lead to a lack of flexibility and compromise, making it difficult for him to gain the support of those around him."
  },
  {
  id: 14,
  name: "Tyrion Lannister",
  enneatype: "The Helper",
  description: "Tyrion Lannister is a classic example of a helper, always willing to assist and protect his loved ones, even when it puts him at risk. His witty charm and intelligence make him an invaluable ally to those he supports.",
  strength: "Tyrion's wit, charm, and willingness to assist others make him a valuable ally. His ability to connect with people and offer help when needed endears him to those around him.",
  weakness: "Yet, his deep desire to be appreciated and loved can lead to moments of manipulation or misplaced trust. His openness may make him vulnerable to those who seek to exploit his kindness."
},
{
  id: 10, 
  name: "Catelyn Stark",
  enneatype: "The Helper",
  description: "Catelyn Stark's strong maternal instincts, compassion, and willingness to protect her family align with the qualities of 'The Helper.' She is dedicated to the well-being of her loved ones and takes action to ensure their safety.",
  strength: "Catelyn's unwavering love and care for her family make her a nurturing and protective presence. Her willingness to go to great lengths to support and assist her loved ones exemplifies her helper personality.",
  weakness: "However, her intense desire to protect and support her family can lead to moments of overbearing behavior and interference in their lives. Her nurturing nature may sometimes become smothering."
},
{
  id: 42,  
  name: "Tywin Lannister",
  enneatype: "The Achiever",
  description: "Tywin Lannister is an exceptionally ambitious and success-driven character. His unwavering determination to maintain his family's power and status at all costs makes him a classic Achiever.",
  strength: "Tywin's unyielding focus on achievement and his ability to take ruthless actions to secure his family's position demonstrate his strong Achiever tendencies. His strategic mind and leadership skills are commendable.",
  weakness: "However, his unrelenting pursuit of success can lead to moral compromises and strained family relationships. His obsession with maintaining power can put him at odds with those who value other virtues."
},
{
  id: 8,
  name: "Jaime Lannister",
  enneatype: "The Achiever",
  description: "Jaime Lannister, with his relentless pursuit of recognition and success, embodies the achiever personality. His desire for glory and his ability to adapt to changing circumstances showcase his achiever nature.",
  strength: "Jaime's unwavering determination and his talent for excelling in various roles make him a formidable figure. His ability to strategize and achieve his goals highlight his achiever qualities.",
  weakness: "However, his obsession with reputation and his occasional moral conflicts can lead to moments of inner turmoil. His pursuit of success, at times, comes at a high personal cost."
},
{
id: 13,
name: "Joffrey Baratheon",
enneatype: "The Achiever",
description: "Joffrey Baratheon's strong desire for success, recognition, and the pursuit of power align with the achiever personality. His ambition and need to be admired make him a classic achiever.",
strength: "Joffrey's charisma and ability to assert himself in the pursuit of his goals make him a prominent figure. His desire to stand out and achieve greatness highlights his achiever qualities.",
weakness: "However, his obsession with appearances, vanity, and his willingness to do whatever it takes to maintain his image can lead to moments of cruelty and moral compromise. His unrelenting pursuit of power may put him at odds with those who value ethics and integrity."
},
{
  id: 50, 
  name: "Margaery Tyrell",
  enneatype: "The Achiever",
  description: "Margaery Tyrell is a character constantly seeking success and recognition in the political intrigue of Westeros. Her charisma and strategic pursuits place her squarely in the Achiever category.",
  strength: "Margaery's relentless pursuit of success and her ability to navigate the complex politics of the realm reflect her strong Achiever personality. Her charm and adaptability make her a formidable player in the game of thrones.",
  weakness: "Yet, her ambition and desire for power can lead to moments of manipulation and strained alliances. Her unwavering commitment to her goals may sometimes clash with the values of others in her quest for recognition."
},
{
  id: 26,
  name: "Viserys Targaryen",
  enneatype: "The Achiever",
  description: "Viserys Targaryen's strong desire to reclaim the Iron Throne aligns with the achiever personality. He is ambitious and driven by personal success and recognition. However, his fixation on his own ambition often leads to a lack of empathy and strained relationships with others.",
  strength: "Viserys's determination and focus on personal achievement make him a formidable contender. His unwavering pursuit of power and his ability to strategize highlight his achiever qualities.",
  weakness: "Yet, his single-minded pursuit of success can make him ruthless and manipulative. His need for validation and his self-centeredness often lead to his downfall and isolation."
},
{
id: 35,
name: "Ramsey Bolton",
enneatype: "The Achiever",
description: "Ramsey Bolton's relentless pursuit of power and his desire to assert dominance align with the Achiever personality. His cruel and sadistic methods may shock, but they serve his quest for supremacy.",
strength: "Ramsey's cunning and determination make him a formidable adversary. His ability to manipulate and instill fear in others demonstrates his Achiever qualities.",
weakness: "However, his obsession with control and willingness to commit heinous acts may lead to moments of self-destruction and isolation. His pursuit of success is ruthless and devoid of morality."
}, 
{
  id: 2,
  name: "Jon Snow",
  enneatype: "The Individualist",
  description: "Jon Snow's unique identity and sense of being an outsider make him a good example of the individualist. His journey to discover his true heritage and his inner conflict exemplify the individualist's pursuit of self-identity.",
  strength: "Jon's introspective nature and ability to connect with his true self make him resilient. His empathy for others, especially those who are marginalized, is a testament to his individualist qualities.",
  weakness: "Yet, his deep inner turmoil and tendency to isolate himself can lead to moments of self-doubt and emotional intensity. His quest for self-identity may at times cloud his judgment."
},
{
  id: 3,
  name: "Arya Stark",
  enneatype: "The Individualist",
  description: "Arya Stark's journey of self-discovery and her quest for vengeance reflect the individualist characteristics. Her transformation from a noble girl to a skilled assassin highlights her pursuit of individuality.",
  strength: "Arya's determination to chart her own path and seek justice is admirable. Her adaptability and resilience in the face of adversity make her a symbol of the individualist spirit.",
  weakness: "Yet, her relentless pursuit of personal vendettas and her secretive nature can lead to moments of isolation and emotional detachment. Her quest for individuality may put her at odds with societal norms."
},
{
  id: 5,
  name: "Bran Stark",
  enneatype: "The Observer",
  description: "Bran Stark's role as the Three-Eyed Raven demonstrates his observant and knowledge-seeking nature. His pursuit of knowledge and his ability to see the past, present, and future make him a unique observer of the world.",
  strength: "Bran's insatiable curiosity and quest for knowledge give him unparalleled insights. His ability to observe and learn from history and the world's events is a testament to his observer qualities.",
  weakness: "However, his detachment from his own identity and emotions can lead to moments of aloofness and isolation. His relentless pursuit of knowledge may disconnect him from the human experience."
},
{
  id: 12,
  name: "Theon Greyjoy",
  enneatype: "The Loyalist",
  description: "Theon Greyjoy's complex loyalty struggles and desire to belong align with the loyalist personality. His internal conflict and longing for acceptance make him a fitting loyalist character.",
  strength: "Theon's ability to adapt and his desire to prove himself as loyal, even if misguided, make him a dedicated follower. His commitment to the Iron Islands and his desire to belong showcase his loyalist qualities.",
  weakness: "However, his internal turmoil and vulnerability to manipulation can lead to moments of betrayal and moral conflict. His loyalty, while present, may be divided among conflicting loyalties."
},
{
  id: 4,
  name: "Sansa Stark",
  enneatype: "The Loyalist",
  description: "Sansa Stark's loyalty to her family, even in the face of adversity, exemplifies the loyalist qualities. Her unwavering commitment to her loved ones and her ability to endure difficult circumstances showcase her role as a loyalist.",
  strength: "Sansa's loyalty and resilience make her a pillar of support for her family. Her ability to adapt and navigate treacherous situations highlights her loyalist mindset.",
  weakness: "However, her trust in the wrong people and her naivety can lead to moments of vulnerability and manipulation. Her loyalty, at times, blinds her to the true intentions of others."
},
{
  id: 39,
  name: "Oberyn Martell",
  enneatype: "The Enthusiast",
  description: "Oberyn Martell's passionate and pleasure-seeking nature makes him a good example of an enthusiast. His zest for life and his pursuit of pleasure and excitement reflect the enthusiastic qualities of this enneatype.",
  strength: "Oberyn's boundless enthusiasm and ability to find joy in the midst of adversity make him a captivating and lively presence. His passion for justice and revenge is a testament to his enthusiast mindset.",
  weakness: "However, his impulsivity and risk-taking can lead to moments of recklessness and impulsiveness. His unbridled enthusiasm, at times, puts him in dangerous situations."
},
{
  id: 34,
  name: "Olenna Tyrell",
  enneatype: "The Enthusiast",
  description: "Olenna Tyrell, with her sharp wit and lively spirit, embodies the enthusiast personality. Her love for political intrigue and her fearless approach to achieving her goals highlight her enthusiast nature.",
  strength: "Olenna's quick wit and ability to outmaneuver her opponents make her a formidable player in the political game. Her unwavering determination and passion for her house showcase her enthusiast qualities.",
  weakness: "However, her manipulative tactics and her willingness to bend the truth can lead to moments of moral ambiguity and ethical concerns. Her pursuit of her goals may put her at odds with those who value honesty and integrity."
},
{
  id: 21, 
  name: "Margaery Tyrell",
  enneatype: "The Enthusiast",
  description: "Margaery Tyrell's adaptability, charm, and pursuit of favor and excitement align with the qualities of 'The Enthusiast.' She excels in navigating the complexities of court politics and seeks to win the approval of those around her.",
  strength: "Margaery's charisma and ability to charm and manipulate those in her social circle make her a captivating figure. Her adaptability and willingness to embrace change highlight her enthusiast personality.",
  weakness: "However, her constant pursuit of approval and her readiness to use charm as a strategy can lead to moments of manipulation and a lack of authenticity. Her enthusiasm for the intrigues of the court may put her at odds with those who value transparency."
},
{
  id: 46,
  name: "Euron Greyjoy",
  enneatype: "The Enthusiast",
  description: "Euron Greyjoy, with his hedonistic and pleasure-seeking lifestyle, embodies the enthusiast personality. His love for chaos, power, and indulgence showcases his enthusiast nature.",
  strength: "Euron's charisma and his ability to inspire others to follow him make him a formidable and influential presence. His pursuit of personal pleasure and his love for chaos highlight his enthusiast qualities.",
  weakness: "However, his excessive hedonism and his disregard for the consequences of his actions can lead to moments of self-destructiveness and danger. His relentless pursuit of personal satisfaction may put him at odds with those who value order and stability."
},
{
  id: 0,
  name: "Daenerys Targaryen",
  enneatype: "The Challenger",
  description: "Daenerys Targaryen's determination to challenge and conquer her enemies aligns with the challenger personality. Her relentless pursuit of power and her desire to free the oppressed make her a true challenger. As the Mother of Dragons, she embodies the strength and might of this enneatype.",
  strength: "Daenerys's unyielding determination and her ability to inspire others to follow her make her a formidable leader. Her commitment to justice and her willingness to confront authority showcase her challenger mindset. Her dragons, powerful allies, reflect her dominant and fearless nature.",
  weakness: "However, her ruthless pursuit of her goals and her thirst for control can lead to moments of tyranny and oppression. Her challenger nature may, at times, clash with those who value peace and stability. Her unyielding determination can be seen as uncompromising."
},
{
  id: 2,
  name: "Robb Stark",
  enneatype: "The Challenger",
  description: "Robb Stark's determination to challenge and confront his enemies aligns with the challenger personality. His relentless pursuit of justice and his readiness to lead his people make him a true challenger. As the King in the North, he embodies the strength and assertiveness of this enneatype.",
  strength: "Robb's unwavering determination and his ability to inspire loyalty from his followers make him a formidable leader. His commitment to honor and justice, as well as his courage in battle, showcase his challenger mindset.",
  weakness: "However, his ruthless pursuit of his goals and his willingness to make difficult decisions can sometimes lead to unintended consequences and moral dilemmas. His challenger nature may, at times, clash with those who seek compromise and diplomacy."
},
{
  id: 9,
  name: "Cersei Lannister",
  enneatype: "The Challenger",
  description: "Cersei Lannister's ambition and willingness to do whatever it takes to achieve her goals make her another example of a challenger. Her desire for power and control defines her challenger personality. As the Queen of the Seven Kingdoms, she demonstrates the determination of an enneatype 8.",
  strength: "Cersei's strategic mind and her ability to manipulate those around her make her a formidable and cunning figure. Her unwavering pursuit of her goals and her willingness to challenge authority showcase her challenger mindset. Her strong leadership and political acumen are evident in her actions.",
  weakness: "However, her ruthlessness and her readiness to use any means necessary can lead to moments of betrayal and mistrust. Her challenger nature may, at times, alienate even those closest to her. Her obsession with power can blind her to the consequences of her actions."
},
{
  id: 7,
  name: "Robert Baratheon",
  enneatype: "The Challenger",
  description: "Robert Baratheon's assertive and confrontational nature aligns with the challenger personality. His strong-willed approach to life and his desire to maintain control make him a true challenger.",
  strength: "Robert's fearlessness in the face of danger and his leadership qualities make him a powerful force. His willingness to confront those who challenge his authority showcases his challenger mindset.",
  weakness: "However, his stubbornness and impulsivity can lead to moments of recklessness and conflict. His relentless pursuit of control may, at times, lead to unintended consequences."
},
{
id: 45,
name: "Yara Greyjoy",
enneatype: "The Challenger",
description: "Yara Greyjoy's fearless and determined nature align with the challenger personality. Her willingness to challenge traditional gender roles and her pursuit of power make her a true challenger in the world of 'Game of Thrones.'",
strength: "Yara's courage and determination in a male-dominated society set her apart. Her leadership qualities and her desire to prove her worth highlight her challenger qualities.",
weakness: "However, her relentless pursuit of power and her uncompromising nature can lead to moments of recklessness and conflict. Her challenger mindset may put her at odds with those who value tradition and hierarchy."
},
{
id: 28,
name: "Roose Bolton",
enneatype: "The Challenger",
description: "Roose Bolton's ruthless and strategic approach to achieving his goals aligns with the challenger personality. His ability to play the long game and his desire for power and control make him a true challenger.",
strength: "Roose's calculated and cunning nature allows him to manipulate events to his advantage. His ability to inspire fear and loyalty in his followers showcases his challenger qualities.",
weakness: "However, his cold and detached demeanor can lead to moments of isolation and mistrust. His ruthless pursuit of power may put him at odds with those who value compassion and honor."
},
{
  id: 31, 
  name: "Tommen Baratheon",
  enneatype: "The Peacemaker",
  description: "Tommen Baratheon's inclination toward peace, avoidance of conflict, and his desire for a harmonious realm align with the qualities of 'The Peacemaker.' He seeks to maintain tranquility and balance in the Seven Kingdoms.",
  strength: "Tommen's ability to mediate and his yearning for peace make him a unifying and conciliatory figure. His commitment to harmony and his efforts to avoid strife contribute to a peaceful environment.",
  weakness: "However, his avoidance of conflict and hesitance to make tough decisions can lead to moments of indecision and passivity. His reluctance to confront challenges may hinder his rule, especially in turbulent times."
},
{
  id: 25,
  name: "Gilly",
  enneatype: "The Peacemaker",
  description: "Gilly's longing for a peaceful and stable life, as well as her nurturing nature, make her a good example of a peacemaker. Her desire to provide a safe and loving environment for her child demonstrates her commitment to peace and security.",
  strength: "Gilly's ability to create a loving and stable home for her child is a testament to her peacemaker qualities. Her nurturing and protective instincts reflect her commitment to harmony. Her willingness to adapt and her desire for a peaceful existence contribute to a tranquil atmosphere.",
  weakness: "However, her past traumas and challenges may sometimes hinder her ability to fully embrace a peaceful life. Her peacemaker nature can lead to avoidance of conflict, even when assertiveness is required. Her journey toward peace is an ongoing struggle."
},
{
  id: 4,
  name: "Sansa Stark",
  enneatype: "The Peacemaker",
  description: "Sansa Stark's desire for peace and harmony aligns with the peacemaker personality. She often seeks to avoid conflict and create a sense of tranquility, making her an empathetic and diplomatic character. However, her tendency to conform and adapt can sometimes lead to a loss of self-identity.",
  strength: "Sansa's ability to mediate and maintain calm in challenging situations makes her a valuable presence. Her compassion and desire for unity highlight her peacemaker qualities.",
  weakness: "Yet, her strong desire to avoid conflict may result in passivity and vulnerability. Her adaptability, while a strength, can sometimes lead to submissiveness and a struggle to assert her own desires."
},
{
  id: 33,
  name: "Jorah Mormont",
  enneatype: "The Helper",
  description: "Jorah Mormont's selfless and nurturing nature aligns with the helper qualities. He consistently provides support and care for those he cares about, often putting their needs before his own.",
  strength: "Jorah's willingness to assist others and his empathetic approach make him a reliable and compassionate friend. His protective instincts are evident in his actions.",
  weakness: "However, his strong desire to be needed by others can lead to self-neglect and boundary issues. Jorah's tendency to focus on rescuing those he loves can sometimes become a burden."
},
{
  id: 37,
  name: "Jeor Mormont",
  enneatype: "The Challenger",
  description: "Jeor Mormont's commanding and authoritative demeanor places him in the challenger category. He is unafraid to take charge and lead, often instilling discipline and order.",
  strength: "Jeor's assertiveness and ability to make tough decisions make him a respected leader. His unwavering commitment to his responsibilities is a hallmark of his personality.",
  weakness: "However, his authoritarian approach can lead to conflicts, and his unwillingness to back down from challenges may lead to stubbornness. Jeor's rigid sense of duty can sometimes strain relationships."
}

];

function getCharacterById(characterId) {
  return dataCharacters.find(character => character.id === characterId);
}

export { dataCharacters, getCharacterById };