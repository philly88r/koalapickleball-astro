declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"2023-essential-pickleball-accessory-list-guide.md": {
	id: "2023-essential-pickleball-accessory-list-guide.md";
  slug: "2023-essential-pickleball-accessory-list-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-equipment-awards-winners-list.md": {
	id: "2023-pickleball-equipment-awards-winners-list.md";
  slug: "2023-pickleball-equipment-awards-winners-list";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-machine-shootout-top-aids-reviewed.md": {
	id: "2023-pickleball-machine-shootout-top-aids-reviewed.md";
  slug: "2023-pickleball-machine-shootout-top-aids-reviewed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-resolutions-for-a-better-game.md": {
	id: "2023-pickleball-resolutions-for-a-better-game.md";
  slug: "2023-pickleball-resolutions-for-a-better-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-rule-overhauls-enhance-gameplay.md": {
	id: "2023-pickleball-rule-overhauls-enhance-gameplay.md";
  slug: "2023-pickleball-rule-overhauls-enhance-gameplay";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-rules-update-major-changes-revealed.md": {
	id: "2023-pickleball-rules-update-major-changes-revealed.md";
  slug: "2023-pickleball-rules-update-major-changes-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023-pickleball-trends-what-to-watch-for.md": {
	id: "2023-pickleball-trends-what-to-watch-for.md";
  slug: "2023-pickleball-trends-what-to-watch-for";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023s-top-new-pickleball-paddle-2.md": {
	id: "2023s-top-new-pickleball-paddle-2.md";
  slug: "2023s-top-new-pickleball-paddle-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2023s-top-new-pickleball-paddle.md": {
	id: "2023s-top-new-pickleball-paddle.md";
  slug: "2023s-top-new-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2024-top-10-pickleball-highlights.md": {
	id: "2024-top-10-pickleball-highlights.md";
  slug: "2024-top-10-pickleball-highlights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2025-pickleball-tournament-guide.md": {
	id: "2025-pickleball-tournament-guide.md";
  slug: "2025-pickleball-tournament-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"6-tips-to-unlock-massive-serves.md": {
	id: "6-tips-to-unlock-massive-serves.md";
  slug: "6-tips-to-unlock-massive-serves";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ace-pickleball-techniques-to-improve-your-game.md": {
	id: "ace-pickleball-techniques-to-improve-your-game.md";
  slug: "ace-pickleball-techniques-to-improve-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ace-your-game-pickleball-tournament-preparation-tips.md": {
	id: "ace-your-game-pickleball-tournament-preparation-tips.md";
  slug: "ace-your-game-pickleball-tournament-preparation-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ace-your-pickleball-tournament-preparation-effortlessly.md": {
	id: "ace-your-pickleball-tournament-preparation-effortlessly.md";
  slug: "ace-your-pickleball-tournament-preparation-effortlessly";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"active-seniors-pickleball-for-competition-health.md": {
	id: "active-seniors-pickleball-for-competition-health.md";
  slug: "active-seniors-pickleball-for-competition-health";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"adaptive-pickleball-equipment-for-enhanced-play.md": {
	id: "adaptive-pickleball-equipment-for-enhanced-play.md";
  slug: "adaptive-pickleball-equipment-for-enhanced-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"advanced-pickleball-drills-a-comprehensive-guide.md": {
	id: "advanced-pickleball-drills-a-comprehensive-guide.md";
  slug: "advanced-pickleball-drills-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"advanced-pickleball-drills-to-elevate-your-game.md": {
	id: "advanced-pickleball-drills-to-elevate-your-game.md";
  slug: "advanced-pickleball-drills-to-elevate-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"advanced-pickleball-paddle-technology-insights.md": {
	id: "advanced-pickleball-paddle-technology-insights.md";
  slug: "advanced-pickleball-paddle-technology-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"aggressive-tactics-mastering-the-fourth-shot-strategy.md": {
	id: "aggressive-tactics-mastering-the-fourth-shot-strategy.md";
  slug: "aggressive-tactics-mastering-the-fourth-shot-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ai-revolutionizes-pickleball-with-advanced-analysis.md": {
	id: "ai-revolutionizes-pickleball-with-advanced-analysis.md";
  slug: "ai-revolutionizes-pickleball-with-advanced-analysis";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"analyzing-your-pickleball-game-how-to-identify-and-improve-weaknesses.md": {
	id: "analyzing-your-pickleball-game-how-to-identify-and-improve-weaknesses.md";
  slug: "analyzing-your-pickleball-game-how-to-identify-and-improve-weaknesses";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"anna-leigh-waters-dominates-in-usa-pickleball-championships.md": {
	id: "anna-leigh-waters-dominates-in-usa-pickleball-championships.md";
  slug: "anna-leigh-waters-dominates-in-usa-pickleball-championships";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"anna-leigh-waters-dominates-pickleball-tournament-scene.md": {
	id: "anna-leigh-waters-dominates-pickleball-tournament-scene.md";
  slug: "anna-leigh-waters-dominates-pickleball-tournament-scene";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"atlanta-pickleball-top-places-to-play-and-compete.md": {
	id: "atlanta-pickleball-top-places-to-play-and-compete.md";
  slug: "atlanta-pickleball-top-places-to-play-and-compete";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"attitudes-impact-on-pickleball-performance.md": {
	id: "attitudes-impact-on-pickleball-performance.md";
  slug: "attitudes-impact-on-pickleball-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"austin-pickleball-discovering-the-best-local-courts.md": {
	id: "austin-pickleball-discovering-the-best-local-courts.md";
  slug: "austin-pickleball-discovering-the-best-local-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"avoid-footwork-fumbles-during-pickleball-matches.md": {
	id: "avoid-footwork-fumbles-during-pickleball-matches.md";
  slug: "avoid-footwork-fumbles-during-pickleball-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"avoid-rushing-errors-for-pickleball-success.md": {
	id: "avoid-rushing-errors-for-pickleball-success.md";
  slug: "avoid-rushing-errors-for-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"avoiding-pop-ups-in-pickleball-expert-strategies.md": {
	id: "avoiding-pop-ups-in-pickleball-expert-strategies.md";
  slug: "avoiding-pop-ups-in-pickleball-expert-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"backhand-dink-secrets-revealed.md": {
	id: "backhand-dink-secrets-revealed.md";
  slug: "backhand-dink-secrets-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"backhand-serve-unleashing-strategic-surprise-in-pickleball.md": {
	id: "backhand-serve-unleashing-strategic-surprise-in-pickleball.md";
  slug: "backhand-serve-unleashing-strategic-surprise-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"bait-ball-strategy-mastering-deceptive-pickleball-shots.md": {
	id: "bait-ball-strategy-mastering-deceptive-pickleball-shots.md";
  slug: "bait-ball-strategy-mastering-deceptive-pickleball-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"balance-boosts-pickleball-performance.md": {
	id: "balance-boosts-pickleball-performance.md";
  slug: "balance-boosts-pickleball-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"become-a-pickleball-pro-mastering-balance-tips.md": {
	id: "become-a-pickleball-pro-mastering-balance-tips.md";
  slug: "become-a-pickleball-pro-mastering-balance-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beginners-guide-to-pickleball-quick-start-tips-2.md": {
	id: "beginners-guide-to-pickleball-quick-start-tips-2.md";
  slug: "beginners-guide-to-pickleball-quick-start-tips-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beginners-guide-to-pickleball-quick-start-tips.md": {
	id: "beginners-guide-to-pickleball-quick-start-tips.md";
  slug: "beginners-guide-to-pickleball-quick-start-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"bert-shot-the-game-changer-in-pickleball.md": {
	id: "bert-shot-the-game-changer-in-pickleball.md";
  slug: "bert-shot-the-game-changer-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-adv-pickleball-bags-for-serious-players.md": {
	id: "best-adv-pickleball-bags-for-serious-players.md";
  slug: "best-adv-pickleball-bags-for-serious-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-court-shoes-for-pickleball-players.md": {
	id: "best-court-shoes-for-pickleball-players.md";
  slug: "best-court-shoes-for-pickleball-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-paddle-face-materials-for-enhanced-play.md": {
	id: "best-paddle-face-materials-for-enhanced-play.md";
  slug: "best-paddle-face-materials-for-enhanced-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-pickleball-brands-comparing-top-equipment.md": {
	id: "best-pickleball-brands-comparing-top-equipment.md";
  slug: "best-pickleball-brands-comparing-top-equipment";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-pickleball-paddles-for-women-2024-buyers-guide.md": {
	id: "best-pickleball-paddles-for-women-2024-buyers-guide.md";
  slug: "best-pickleball-paddles-for-women-2024-buyers-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"best-pickleball-sets-2023-for-family-fun.md": {
	id: "best-pickleball-sets-2023-for-family-fun.md";
  slug: "best-pickleball-sets-2023-for-family-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"big-backswings-a-deadly-error-in-pickleball.md": {
	id: "big-backswings-a-deadly-error-in-pickleball.md";
  slug: "big-backswings-a-deadly-error-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blqk-triumphs-mlp-2022-season-highlight.md": {
	id: "blqk-triumphs-mlp-2022-season-highlight.md";
  slug: "blqk-triumphs-mlp-2022-season-highlight";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boost-confidence-and-composure-on-off-days.md": {
	id: "boost-confidence-and-composure-on-off-days.md";
  slug: "boost-confidence-and-composure-on-off-days";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boost-your-game-paddle-cleaning-guide.md": {
	id: "boost-your-game-paddle-cleaning-guide.md";
  slug: "boost-your-game-paddle-cleaning-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boost-your-game-with-pickleball-digital-marketing.md": {
	id: "boost-your-game-with-pickleball-digital-marketing.md";
  slug: "boost-your-game-with-pickleball-digital-marketing";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boost-your-game-with-pre-serve-rituals.md": {
	id: "boost-your-game-with-pre-serve-rituals.md";
  slug: "boost-your-game-with-pre-serve-rituals";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boosting-pickleball-performance-through-mental-strategies.md": {
	id: "boosting-pickleball-performance-through-mental-strategies.md";
  slug: "boosting-pickleball-performance-through-mental-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"bugs-buzzing-on-pickleball-courts.md": {
	id: "bugs-buzzing-on-pickleball-courts.md";
  slug: "bugs-buzzing-on-pickleball-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"building-a-local-pickleball-community-effective-tips.md": {
	id: "building-a-local-pickleball-community-effective-tips.md";
  slug: "building-a-local-pickleball-community-effective-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"buy-vatic-pro-flash-top-high-speed-ssd.md": {
	id: "buy-vatic-pro-flash-top-high-speed-ssd.md";
  slug: "buy-vatic-pro-flash-top-high-speed-ssd";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"celebrities-invest-in-major-league-pickleball-teams.md": {
	id: "celebrities-invest-in-major-league-pickleball-teams.md";
  slug: "celebrities-invest-in-major-league-pickleball-teams";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"celebrities-spark-pickleball-frenzy-a-game-changer.md": {
	id: "celebrities-spark-pickleball-frenzy-a-game-changer.md";
  slug: "celebrities-spark-pickleball-frenzy-a-game-changer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"celebrity-pickleball-stars-who-love-the-game-craze.md": {
	id: "celebrity-pickleball-stars-who-love-the-game-craze.md";
  slug: "celebrity-pickleball-stars-who-love-the-game-craze";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"cell-phones-revolutionize-coaching-in-pickleball.md": {
	id: "cell-phones-revolutionize-coaching-in-pickleball.md";
  slug: "cell-phones-revolutionize-coaching-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"challenge-stronger-players-to-elevate-your-game.md": {
	id: "challenge-stronger-players-to-elevate-your-game.md";
  slug: "challenge-stronger-players-to-elevate-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"cheap-pickleball-paddles-our-top-5-amazon-picks-for-2024.md": {
	id: "cheap-pickleball-paddles-our-top-5-amazon-picks-for-2024.md";
  slug: "cheap-pickleball-paddles-our-top-5-amazon-picks-for-2024";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"choosing-the-best-joola-pickleball-paddle-for-your-game.md": {
	id: "choosing-the-best-joola-pickleball-paddle-for-your-game.md";
  slug: "choosing-the-best-joola-pickleball-paddle-for-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"choosing-the-right-pickleball-ball-indoor-vs-outdoor-play.md": {
	id: "choosing-the-right-pickleball-ball-indoor-vs-outdoor-play.md";
  slug: "choosing-the-right-pickleball-ball-indoor-vs-outdoor-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"choosing-your-first-pickleball-paddle-essential-tips.md": {
	id: "choosing-your-first-pickleball-paddle-essential-tips.md";
  slug: "choosing-your-first-pickleball-paddle-essential-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"common-pickleball-injuries-prevention-tips.md": {
	id: "common-pickleball-injuries-prevention-tips.md";
  slug: "common-pickleball-injuries-prevention-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"controversy-brews-recreational-pickleball-and-rule-adherence.md": {
	id: "controversy-brews-recreational-pickleball-and-rule-adherence.md";
  slug: "controversy-brews-recreational-pickleball-and-rule-adherence";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"controversy-erupts-over-pickleball-attire-rules.md": {
	id: "controversy-erupts-over-pickleball-attire-rules.md";
  slug: "controversy-erupts-over-pickleball-attire-rules";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"controversy-strikes-deciphering-pickleball-line-calls.md": {
	id: "controversy-strikes-deciphering-pickleball-line-calls.md";
  slug: "controversy-strikes-deciphering-pickleball-line-calls";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"court-pickleball-tips-for-playing-on-different-surfaces.md": {
	id: "court-pickleball-tips-for-playing-on-different-surfaces.md";
  slug: "court-pickleball-tips-for-playing-on-different-surfaces";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"court-safety-secrets-revealed.md": {
	id: "court-safety-secrets-revealed.md";
  slug: "court-safety-secrets-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"cozy-up-your-game-comfort-tac-overgrip-review.md": {
	id: "cozy-up-your-game-comfort-tac-overgrip-review.md";
  slug: "cozy-up-your-game-comfort-tac-overgrip-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crafting-personalized-pre-serve-routines-boosts-performance.md": {
	id: "crafting-personalized-pre-serve-routines-boosts-performance.md";
  slug: "crafting-personalized-pre-serve-routines-boosts-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crbn-1x-2x-elite-paintball-gear-for-pros.md": {
	id: "crbn-1x-2x-elite-paintball-gear-for-pros.md";
  slug: "crbn-1x-2x-elite-paintball-gear-for-pros";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crbn-paddle-delivers-precision-and-performance.md": {
	id: "crbn-paddle-delivers-precision-and-performance.md";
  slug: "crbn-paddle-delivers-precision-and-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crbn-power-series-paddle-review-unleash-your-pickleball-potential.md": {
	id: "crbn-power-series-paddle-review-unleash-your-pickleball-potential.md";
  slug: "crbn-power-series-paddle-review-unleash-your-pickleball-potential";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"crbn-power-series-pickleball-paddle-review-carbon-fiber-sweet-spot.md": {
	id: "crbn-power-series-pickleball-paddle-review-carbon-fiber-sweet-spot.md";
  slug: "crbn-power-series-pickleball-paddle-review-carbon-fiber-sweet-spot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"creative-pickleball-team-names-for-your-squad.md": {
	id: "creative-pickleball-team-names-for-your-squad.md";
  slug: "creative-pickleball-team-names-for-your-squad";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"cutting-edge-paddle-review-black-diamond-twins.md": {
	id: "cutting-edge-paddle-review-black-diamond-twins.md";
  slug: "cutting-edge-paddle-review-black-diamond-twins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"cutting-edge-pickleball-tech-game-changing-innovations.md": {
	id: "cutting-edge-pickleball-tech-game-changing-innovations.md";
  slug: "cutting-edge-pickleball-tech-game-changing-innovations";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"dawsons-exceptional-play-causes-rally-turnabout.md": {
	id: "dawsons-exceptional-play-causes-rally-turnabout.md";
  slug: "dawsons-exceptional-play-causes-rally-turnabout";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"debating-fan-cheering-impact-on-pickleball-matches.md": {
	id: "debating-fan-cheering-impact-on-pickleball-matches.md";
  slug: "debating-fan-cheering-impact-on-pickleball-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"defensive-pickleball-tactics-for-winning-strategies.md": {
	id: "defensive-pickleball-tactics-for-winning-strategies.md";
  slug: "defensive-pickleball-tactics-for-winning-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"delaminated-pickleball-paddle-a-powerful-safety-hazard.md": {
	id: "delaminated-pickleball-paddle-a-powerful-safety-hazard.md";
  slug: "delaminated-pickleball-paddle-a-powerful-safety-hazard";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"diadem-pickleball-paddle-reviews-and-tips.md": {
	id: "diadem-pickleball-paddle-reviews-and-tips.md";
  slug: "diadem-pickleball-paddle-reviews-and-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"discover-local-pickleball-courts-players-easily.md": {
	id: "discover-local-pickleball-courts-players-easily.md";
  slug: "discover-local-pickleball-courts-players-easily";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"discover-pickleball-and-why-youll-love-it.md": {
	id: "discover-pickleball-and-why-youll-love-it.md";
  slug: "discover-pickleball-and-why-youll-love-it";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"discover-top-pickleball-clinics-near-you-today.md": {
	id: "discover-top-pickleball-clinics-near-you-today.md";
  slug: "discover-top-pickleball-clinics-near-you-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"disrupt-opponents-with-strategic-lob-serve.md": {
	id: "disrupt-opponents-with-strategic-lob-serve.md";
  slug: "disrupt-opponents-with-strategic-lob-serve";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"distraction-sparks-controversy-in-pickleball-tournament.md": {
	id: "distraction-sparks-controversy-in-pickleball-tournament.md";
  slug: "distraction-sparks-controversy-in-pickleball-tournament";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"distractions-deciphered-the-pickleball-protocol.md": {
	id: "distractions-deciphered-the-pickleball-protocol.md";
  slug: "distractions-deciphered-the-pickleball-protocol";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"dotty-zerbst-the-unstoppable-pickleball-prodigy.md": {
	id: "dotty-zerbst-the-unstoppable-pickleball-prodigy.md";
  slug: "dotty-zerbst-the-unstoppable-pickleball-prodigy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"double-hits-unraveling-pickleballs-legalities.md": {
	id: "double-hits-unraveling-pickleballs-legalities.md";
  slug: "double-hits-unraveling-pickleballs-legalities";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"doubles-domination-error-free-pickleball-secrets.md": {
	id: "doubles-domination-error-free-pickleball-secrets.md";
  slug: "doubles-domination-error-free-pickleball-secrets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"drive-vs-drop-mastering-pickleball-third-shots.md": {
	id: "drive-vs-drop-mastering-pickleball-third-shots.md";
  slug: "drive-vs-drop-mastering-pickleball-third-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"drop-serve-a-game-changer-in-pickleball.md": {
	id: "drop-serve-a-game-changer-in-pickleball.md";
  slug: "drop-serve-a-game-changer-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"drop-shots-demystified-control-at-your-fingertips.md": {
	id: "drop-shots-demystified-control-at-your-fingertips.md";
  slug: "drop-shots-demystified-control-at-your-fingertips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"eco-friendly-pickleball-my-waste-reduction-tips.md": {
	id: "eco-friendly-pickleball-my-waste-reduction-tips.md";
  slug: "eco-friendly-pickleball-my-waste-reduction-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"eco-friendly-pickleball-practices-for-sustainability.md": {
	id: "eco-friendly-pickleball-practices-for-sustainability.md";
  slug: "eco-friendly-pickleball-practices-for-sustainability";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"effective-pickleball-strategy-targeting-opponents-left-foot.md": {
	id: "effective-pickleball-strategy-targeting-opponents-left-foot.md";
  slug: "effective-pickleball-strategy-targeting-opponents-left-foot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"efficient-pickleball-payment-systems-simplified.md": {
	id: "efficient-pickleball-payment-systems-simplified.md";
  slug: "efficient-pickleball-payment-systems-simplified";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"efficient-tools-for-dynamic-pickleball-tournaments.md": {
	id: "efficient-tools-for-dynamic-pickleball-tournaments.md";
  slug: "efficient-tools-for-dynamic-pickleball-tournaments";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"electrum-model-e-elite-top-end-electric-car-experience.md": {
	id: "electrum-model-e-elite-top-end-electric-car-experience.md";
  slug: "electrum-model-e-elite-top-end-electric-car-experience";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevate-pickleball-skills-practice-drills-that-work.md": {
	id: "elevate-pickleball-skills-practice-drills-that-work.md";
  slug: "elevate-pickleball-skills-practice-drills-that-work";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevate-play-with-advanced-pickleball-strategies.md": {
	id: "elevate-play-with-advanced-pickleball-strategies.md";
  slug: "elevate-play-with-advanced-pickleball-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevate-your-game-with-erne-shots.md": {
	id: "elevate-your-game-with-erne-shots.md";
  slug: "elevate-your-game-with-erne-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevate-your-pickleball-game-embrace-evolution-now.md": {
	id: "elevate-your-pickleball-game-embrace-evolution-now.md";
  slug: "elevate-your-pickleball-game-embrace-evolution-now";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevate-your-pickleball-game-with-quality-gloves.md": {
	id: "elevate-your-pickleball-game-with-quality-gloves.md";
  slug: "elevate-your-pickleball-game-with-quality-gloves";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elevating-pickleball-user-experience-improvements.md": {
	id: "elevating-pickleball-user-experience-improvements.md";
  slug: "elevating-pickleball-user-experience-improvements";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"elite-pickleball-player-profiles-highlights.md": {
	id: "elite-pickleball-player-profiles-highlights.md";
  slug: "elite-pickleball-player-profiles-highlights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"engage-opponents-with-dynamic-pickleball-strategies.md": {
	id: "engage-opponents-with-dynamic-pickleball-strategies.md";
  slug: "engage-opponents-with-dynamic-pickleball-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"engage-pickleball-a-deep-dive-into-premium-paddle-technology.md": {
	id: "engage-pickleball-a-deep-dive-into-premium-paddle-technology.md";
  slug: "engage-pickleball-a-deep-dive-into-premium-paddle-technology";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"engage-pursuit-pro-premium-pickleball-paddles.md": {
	id: "engage-pursuit-pro-premium-pickleball-paddles.md";
  slug: "engage-pursuit-pro-premium-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"engage-pursuit-ultra-advanced-pickleball-paddle.md": {
	id: "engage-pursuit-ultra-advanced-pickleball-paddle.md";
  slug: "engage-pursuit-ultra-advanced-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-backhand-precision-with-perfect-balance.md": {
	id: "enhance-backhand-precision-with-perfect-balance.md";
  slug: "enhance-backhand-precision-with-perfect-balance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-doubles-pickleball-skills-with-singles-play.md": {
	id: "enhance-doubles-pickleball-skills-with-singles-play.md";
  slug: "enhance-doubles-pickleball-skills-with-singles-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-pickleball-performance-through-effective-partner-communication.md": {
	id: "enhance-pickleball-performance-through-effective-partner-communication.md";
  slug: "enhance-pickleball-performance-through-effective-partner-communication";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-pickleball-skills-with-coachings-role-2.md": {
	id: "enhance-pickleball-skills-with-coachings-role-2.md";
  slug: "enhance-pickleball-skills-with-coachings-role-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-pickleball-skills-with-coachings-role.md": {
	id: "enhance-pickleball-skills-with-coachings-role.md";
  slug: "enhance-pickleball-skills-with-coachings-role";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-skills-with-skinny-singles-tennis-strategy.md": {
	id: "enhance-skills-with-skinny-singles-tennis-strategy.md";
  slug: "enhance-skills-with-skinny-singles-tennis-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-your-game-master-overhead-techniques.md": {
	id: "enhance-your-game-master-overhead-techniques.md";
  slug: "enhance-your-game-master-overhead-techniques";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-your-paddle-performance-tips-techniques.md": {
	id: "enhance-your-paddle-performance-tips-techniques.md";
  slug: "enhance-your-paddle-performance-tips-techniques";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-your-pickleball-doubles-with-the-fade.md": {
	id: "enhance-your-pickleball-doubles-with-the-fade.md";
  slug: "enhance-your-pickleball-doubles-with-the-fade";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"enhance-your-workout-with-a-core-crushing-paddle.md": {
	id: "enhance-your-workout-with-a-core-crushing-paddle.md";
  slug: "enhance-your-workout-with-a-core-crushing-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"erne-pickleball-machine-review-is-it-worth-it.md": {
	id: "erne-pickleball-machine-review-is-it-worth-it.md";
  slug: "erne-pickleball-machine-review-is-it-worth-it";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-drills-for-pickleball-skills-mastery.md": {
	id: "essential-drills-for-pickleball-skills-mastery.md";
  slug: "essential-drills-for-pickleball-skills-mastery";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-accessories-for-players.md": {
	id: "essential-pickleball-accessories-for-players.md";
  slug: "essential-pickleball-accessories-for-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-accessories-you-need-now.md": {
	id: "essential-pickleball-accessories-you-need-now.md";
  slug: "essential-pickleball-accessories-you-need-now";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-coaching-tips-for-success.md": {
	id: "essential-pickleball-coaching-tips-for-success.md";
  slug: "essential-pickleball-coaching-tips-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-equipment-guide-for-players.md": {
	id: "essential-pickleball-equipment-guide-for-players.md";
  slug: "essential-pickleball-equipment-guide-for-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-eyewear-for-court-safety.md": {
	id: "essential-pickleball-eyewear-for-court-safety.md";
  slug: "essential-pickleball-eyewear-for-court-safety";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-gear-for-beginner-to-advanced-players.md": {
	id: "essential-pickleball-gear-for-beginner-to-advanced-players.md";
  slug: "essential-pickleball-gear-for-beginner-to-advanced-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-nutrition-hydration-tips.md": {
	id: "essential-pickleball-nutrition-hydration-tips.md";
  slug: "essential-pickleball-nutrition-hydration-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-rules-what-to-know.md": {
	id: "essential-pickleball-rules-what-to-know.md";
  slug: "essential-pickleball-rules-what-to-know";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"essential-pickleball-terms-every-player-should-know.md": {
	id: "essential-pickleball-terms-every-player-should-know.md";
  slug: "essential-pickleball-terms-every-player-should-know";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"evaluating-pickleball-camps-and-clinics-value.md": {
	id: "evaluating-pickleball-camps-and-clinics-value.md";
  slug: "evaluating-pickleball-camps-and-clinics-value";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exceptional-pickleball-customer-service-expertise.md": {
	id: "exceptional-pickleball-customer-service-expertise.md";
  slug: "exceptional-pickleball-customer-service-expertise";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exciting-pickleball-product-launches-ive-uncovered.md": {
	id: "exciting-pickleball-product-launches-ive-uncovered.md";
  slug: "exciting-pickleball-product-launches-ive-uncovered";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exciting-pickleball-tournaments-await-will-you-play.md": {
	id: "exciting-pickleball-tournaments-await-will-you-play.md";
  slug: "exciting-pickleball-tournaments-await-will-you-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"expert-tips-for-overcoming-pickleball-injuries.md": {
	id: "expert-tips-for-overcoming-pickleball-injuries.md";
  slug: "expert-tips-for-overcoming-pickleball-injuries";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"expert-tips-for-pickleball-event-planning-success.md": {
	id: "expert-tips-for-pickleball-event-planning-success.md";
  slug: "expert-tips-for-pickleball-event-planning-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-2023-pickleball-fashion-trends.md": {
	id: "exploring-2023-pickleball-fashion-trends.md";
  slug: "exploring-2023-pickleball-fashion-trends";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-effective-pickleball-distribution-channels.md": {
	id: "exploring-effective-pickleball-distribution-channels.md";
  slug: "exploring-effective-pickleball-distribution-channels";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-pickleball-business-opportunities-ahead.md": {
	id: "exploring-pickleball-business-opportunities-ahead.md";
  slug: "exploring-pickleball-business-opportunities-ahead";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-pickleball-forum-discussions-expertly.md": {
	id: "exploring-pickleball-forum-discussions-expertly.md";
  slug: "exploring-pickleball-forum-discussions-expertly";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-pickleball-global-expansion-impact.md": {
	id: "exploring-pickleball-global-expansion-impact.md";
  slug: "exploring-pickleball-global-expansion-impact";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-pickleball-technology-advances-today.md": {
	id: "exploring-pickleball-technology-advances-today.md";
  slug: "exploring-pickleball-technology-advances-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-strategic-pickleball-partnerships-growth.md": {
	id: "exploring-strategic-pickleball-partnerships-growth.md";
  slug: "exploring-strategic-pickleball-partnerships-growth";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-the-fascinating-history-of-pickleball.md": {
	id: "exploring-the-fascinating-history-of-pickleball.md";
  slug: "exploring-the-fascinating-history-of-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-top-pickleball-online-communities.md": {
	id: "exploring-top-pickleball-online-communities.md";
  slug: "exploring-top-pickleball-online-communities";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"exploring-trends-pickleball-market-research-insights.md": {
	id: "exploring-trends-pickleball-market-research-insights.md";
  slug: "exploring-trends-pickleball-market-research-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"father-daughter-duos-tournament-debut-sparks-growth.md": {
	id: "father-daughter-duos-tournament-debut-sparks-growth.md";
  slug: "father-daughter-duos-tournament-debut-sparks-growth";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fault-for-crossing-net-plane.md": {
	id: "fault-for-crossing-net-plane.md";
  slug: "fault-for-crossing-net-plane";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"faults-galore-navigating-permanent-objects-in-pickleball.md": {
	id: "faults-galore-navigating-permanent-objects-in-pickleball.md";
  slug: "faults-galore-navigating-permanent-objects-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"faults-in-pickleball-receiver-rules-crucial.md": {
	id: "faults-in-pickleball-receiver-rules-crucial.md";
  slug: "faults-in-pickleball-receiver-rules-crucial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"faulty-footwork-a-game-changer-in-pickleball.md": {
	id: "faulty-footwork-a-game-changer-in-pickleball.md";
  slug: "faulty-footwork-a-game-changer-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"faulty-net-maneuver-costs-point.md": {
	id: "faulty-net-maneuver-costs-point.md";
  slug: "faulty-net-maneuver-costs-point";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"find-pickleball-volunteer-opportunities-near-you.md": {
	id: "find-pickleball-volunteer-opportunities-near-you.md";
  slug: "find-pickleball-volunteer-opportunities-near-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"find-the-best-pickleball-lessons-near-me-a-comprehensive-guide.md": {
	id: "find-the-best-pickleball-lessons-near-me-a-comprehensive-guide.md";
  slug: "find-the-best-pickleball-lessons-near-me-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"finding-indoor-pickleball-courts-near-you-a-comprehensive-guide.md": {
	id: "finding-indoor-pickleball-courts-near-you-a-comprehensive-guide.md";
  slug: "finding-indoor-pickleball-courts-near-you-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"finding-indoor-pickleball-near-you-a-comprehensive-guide.md": {
	id: "finding-indoor-pickleball-near-you-a-comprehensive-guide.md";
  slug: "finding-indoor-pickleball-near-you-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"first-pickleball-game-prep-essential-checklist.md": {
	id: "first-pickleball-game-prep-essential-checklist.md";
  slug: "first-pickleball-game-prep-essential-checklist";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"flexibility-fix-for-pickleball-fans.md": {
	id: "flexibility-fix-for-pickleball-fans.md";
  slug: "flexibility-fix-for-pickleball-fans";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"franklin-carbon-stk-premium-padel-racket-specs.md": {
	id: "franklin-carbon-stk-premium-padel-racket-specs.md";
  slug: "franklin-carbon-stk-premium-padel-racket-specs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"franklins-fs-tour-paddles-unleashing-performance-secrets.md": {
	id: "franklins-fs-tour-paddles-unleashing-performance-secrets.md";
  slug: "franklins-fs-tour-paddles-unleashing-performance-secrets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"from-novice-to-pro-a-pickleball-players-journey-2.md": {
	id: "from-novice-to-pro-a-pickleball-players-journey-2.md";
  slug: "from-novice-to-pro-a-pickleball-players-journey-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"from-novice-to-pro-a-pickleball-players-journey.md": {
	id: "from-novice-to-pro-a-pickleball-players-journey.md";
  slug: "from-novice-to-pro-a-pickleball-players-journey";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"future-of-pickleball-equipment-emerging-trends.md": {
	id: "future-of-pickleball-equipment-emerging-trends.md";
  slug: "future-of-pickleball-equipment-emerging-trends";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"game-changer-elevate-performance-with-paddle-up.md": {
	id: "game-changer-elevate-performance-with-paddle-up.md";
  slug: "game-changer-elevate-performance-with-paddle-up";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"game-changing-gamma-supreme-overgrip-for-ultimate-performance.md": {
	id: "game-changing-gamma-supreme-overgrip-for-ultimate-performance.md";
  slug: "game-changing-gamma-supreme-overgrip-for-ultimate-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"gearbox-cx14-ultimate-high-performance-paddle.md": {
	id: "gearbox-cx14-ultimate-high-performance-paddle.md";
  slug: "gearbox-cx14-ultimate-high-performance-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"gearbox-pickleball-paddles-best-models-reviewed.md": {
	id: "gearbox-pickleball-paddles-best-models-reviewed.md";
  slug: "gearbox-pickleball-paddles-best-models-reviewed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"gearbox-pickleball-reviews-and-recommendations.md": {
	id: "gearbox-pickleball-reviews-and-recommendations.md";
  slug: "gearbox-pickleball-reviews-and-recommendations";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"gearbox-pro-power-paddle-performance-unleashed.md": {
	id: "gearbox-pro-power-paddle-performance-unleashed.md";
  slug: "gearbox-pro-power-paddle-performance-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"global-must-see-top-pickleball-tournaments.md": {
	id: "global-must-see-top-pickleball-tournaments.md";
  slug: "global-must-see-top-pickleball-tournaments";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"global-pickleball-expanding-its-worldwide-influence.md": {
	id: "global-pickleball-expanding-its-worldwide-influence.md";
  slug: "global-pickleball-expanding-its-worldwide-influence";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"growing-the-sport-pickleball-youth-programs.md": {
	id: "growing-the-sport-pickleball-youth-programs.md";
  slug: "growing-the-sport-pickleball-youth-programs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"hat-mishap-costs-player-in-pro-match.md": {
	id: "hat-mishap-costs-player-in-pro-match.md";
  slug: "hat-mishap-costs-player-in-pro-match";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"havoc-unleashed-iphone-ring-tone-hinder.md": {
	id: "havoc-unleashed-iphone-ring-tone-hinder.md";
  slug: "havoc-unleashed-iphone-ring-tone-hinder";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"head-extreme-tour-max-elite-performance-racket.md": {
	id: "head-extreme-tour-max-elite-performance-racket.md";
  slug: "head-extreme-tour-max-elite-performance-racket";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"head-pickleball-paddles-top-picks-and-reviews.md": {
	id: "head-pickleball-paddles-top-picks-and-reviews.md";
  slug: "head-pickleball-paddles-top-picks-and-reviews";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"head-strikes-a-fault-in-pickleball.md": {
	id: "head-strikes-a-fault-in-pickleball.md";
  slug: "head-strikes-a-fault-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"hello-world.md": {
	id: "hello-world.md";
  slug: "hello-world";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"high-lob-the-ultimate-pickleball-game-changer.md": {
	id: "high-lob-the-ultimate-pickleball-game-changer.md";
  slug: "high-lob-the-ultimate-pickleball-game-changer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"high-performance-gearbox-pro-line-equipment.md": {
	id: "high-performance-gearbox-pro-line-equipment.md";
  slug: "high-performance-gearbox-pro-line-equipment";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"home-pickleball-court-setup-essential-gear-guide.md": {
	id: "home-pickleball-court-setup-essential-gear-guide.md";
  slug: "home-pickleball-court-setup-essential-gear-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"host-a-pickleball-tourney-with-the-ultimate-guide.md": {
	id: "host-a-pickleball-tourney-with-the-ultimate-guide.md";
  slug: "host-a-pickleball-tourney-with-the-ultimate-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-big-is-a-pickleball-court-standard-dimensions-explained.md": {
	id: "how-big-is-a-pickleball-court-standard-dimensions-explained.md";
  slug: "how-big-is-a-pickleball-court-standard-dimensions-explained";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-did-pickleball-get-its-name-the-history-explained.md": {
	id: "how-did-pickleball-get-its-name-the-history-explained.md";
  slug: "how-did-pickleball-get-its-name-the-history-explained";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-to-choose-the-perfect-pickleball-glove-for-grip-and-comfort.md": {
	id: "how-to-choose-the-perfect-pickleball-glove-for-grip-and-comfort.md";
  slug: "how-to-choose-the-perfect-pickleball-glove-for-grip-and-comfort";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-to-hit-the-backhand-roll-in-pickleball-ben-johns.md": {
	id: "how-to-hit-the-backhand-roll-in-pickleball-ben-johns.md";
  slug: "how-to-hit-the-backhand-roll-in-pickleball-ben-johns";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"i-formation-unveiled-deception-and-pressure-tactics.md": {
	id: "i-formation-unveiled-deception-and-pressure-tactics.md";
  slug: "i-formation-unveiled-deception-and-pressure-tactics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"illegal-serve-fault-in-pro-pickleball-match.md": {
	id: "illegal-serve-fault-in-pro-pickleball-match.md";
  slug: "illegal-serve-fault-in-pro-pickleball-match";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"improve-pickleball-precision-steady-your-head.md": {
	id: "improve-pickleball-precision-steady-your-head.md";
  slug: "improve-pickleball-precision-steady-your-head";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"improve-your-game-with-laser-focus.md": {
	id: "improve-your-game-with-laser-focus.md";
  slug: "improve-your-game-with-laser-focus";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"in-pickleball-teamwork-triumphs.md": {
	id: "in-pickleball-teamwork-triumphs.md";
  slug: "in-pickleball-teamwork-triumphs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"inclusive-pickleball-accessibility-features-unveiled.md": {
	id: "inclusive-pickleball-accessibility-features-unveiled.md";
  slug: "inclusive-pickleball-accessibility-features-unveiled";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-pickleball-courts-find-the-best-locations-near-you.md": {
	id: "indoor-pickleball-courts-find-the-best-locations-near-you.md";
  slug: "indoor-pickleball-courts-find-the-best-locations-near-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-pickleball-guide-facilities-programs-and-access.md": {
	id: "indoor-pickleball-guide-facilities-programs-and-access.md";
  slug: "indoor-pickleball-guide-facilities-programs-and-access";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-pickleball-near-me-finding-the-best-venues.md": {
	id: "indoor-pickleball-near-me-finding-the-best-venues.md";
  slug: "indoor-pickleball-near-me-finding-the-best-venues";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-pickleball-tactics-for-game-success.md": {
	id: "indoor-pickleball-tactics-for-game-success.md";
  slug: "indoor-pickleball-tactics-for-game-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-pickleball-the-best-courts-and-tips-for-playing-indoors.md": {
	id: "indoor-pickleball-the-best-courts-and-tips-for-playing-indoors.md";
  slug: "indoor-pickleball-the-best-courts-and-tips-for-playing-indoors";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-vs-outdoor-pickleball-key-differences.md": {
	id: "indoor-vs-outdoor-pickleball-key-differences.md";
  slug: "indoor-vs-outdoor-pickleball-key-differences";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"indoor-vs-outdoor-pickleballs-compare-contrast.md": {
	id: "indoor-vs-outdoor-pickleballs-compare-contrast.md";
  slug: "indoor-vs-outdoor-pickleballs-compare-contrast";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"infinity-dbd-the-ultimate-paddle-performance-review.md": {
	id: "infinity-dbd-the-ultimate-paddle-performance-review.md";
  slug: "infinity-dbd-the-ultimate-paddle-performance-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"innovative-pickleball-fundraising-ideas-for-success.md": {
	id: "innovative-pickleball-fundraising-ideas-for-success.md";
  slug: "innovative-pickleball-fundraising-ideas-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"insightful-pickleball-lifestyle-brand-reviews.md": {
	id: "insightful-pickleball-lifestyle-brand-reviews.md";
  slug: "insightful-pickleball-lifestyle-brand-reviews";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"integrating-pickleball-in-schools-a-healthy-shift.md": {
	id: "integrating-pickleball-in-schools-a-healthy-shift.md";
  slug: "integrating-pickleball-in-schools-a-healthy-shift";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"is-hand-switching-a-game-changing-move.md": {
	id: "is-hand-switching-a-game-changing-move.md";
  slug: "is-hand-switching-a-game-changing-move";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"johnson-family-dominates-pro-pickleball-circuit.md": {
	id: "johnson-family-dominates-pro-pickleball-circuit.md";
  slug: "johnson-family-dominates-pro-pickleball-circuit";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"join-a-pickleball-league-near-me-everything-you-need-to-know.md": {
	id: "join-a-pickleball-league-near-me-everything-you-need-to-know.md";
  slug: "join-a-pickleball-league-near-me-everything-you-need-to-know";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"join-local-pickleball-leagues-near-you-today.md": {
	id: "join-local-pickleball-leagues-near-you-today.md";
  slug: "join-local-pickleball-leagues-near-you-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joining-a-pickleball-club-benefits-and-how-to-join.md": {
	id: "joining-a-pickleball-club-benefits-and-how-to-join.md";
  slug: "joining-a-pickleball-club-benefits-and-how-to-join";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"jonny-pickleball-army-veteran-turned-pickleball-pro.md": {
	id: "jonny-pickleball-army-veteran-turned-pickleball-pro.md";
  slug: "jonny-pickleball-army-veteran-turned-pickleball-pro";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joola-ben-johns-perseus-top-pickleball-paddle.md": {
	id: "joola-ben-johns-perseus-top-pickleball-paddle.md";
  slug: "joola-ben-johns-perseus-top-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joola-hyperion-cfs-elite-table-tennis-rubber.md": {
	id: "joola-hyperion-cfs-elite-table-tennis-rubber.md";
  slug: "joola-hyperion-cfs-elite-table-tennis-rubber";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joola-perseus-paddle-a-game-changing-review.md": {
	id: "joola-perseus-paddle-a-game-changing-review.md";
  slug: "joola-perseus-paddle-a-game-changing-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joola-pickleball-best-gear-and-accessories.md": {
	id: "joola-pickleball-best-gear-and-accessories.md";
  slug: "joola-pickleball-best-gear-and-accessories";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"joola-pickleball-paddles-top-choices-for-every-player.md": {
	id: "joola-pickleball-paddles-top-choices-for-every-player.md";
  slug: "joola-pickleball-paddles-top-choices-for-every-player";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"juciao-pickleball-paddle-performance-and-value.md": {
	id: "juciao-pickleball-paddle-performance-and-value.md";
  slug: "juciao-pickleball-paddle-performance-and-value";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"k-swiss-pickleball-shoes-top-picks-for-2024.md": {
	id: "k-swiss-pickleball-shoes-top-picks-for-2024.md";
  slug: "k-swiss-pickleball-shoes-top-picks-for-2024";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"kitchen-fault-fiasco-costs-rally.md": {
	id: "kitchen-fault-fiasco-costs-rally.md";
  slug: "kitchen-fault-fiasco-costs-rally";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"lead-tape-elevate-your-paddle-performance.md": {
	id: "lead-tape-elevate-your-paddle-performance.md";
  slug: "lead-tape-elevate-your-paddle-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"leg-power-vital-for-pickleball-performance.md": {
	id: "leg-power-vital-for-pickleball-performance.md";
  slug: "leg-power-vital-for-pickleball-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"legacy-pro-preserve-your-digital-footprint-today.md": {
	id: "legacy-pro-preserve-your-digital-footprint-today.md";
  slug: "legacy-pro-preserve-your-digital-footprint-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"let-out-balls-for-pickleball-victory.md": {
	id: "let-out-balls-for-pickleball-victory.md";
  slug: "let-out-balls-for-pickleball-victory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"level-up-your-game-roadmap-for-pickleball-mastery.md": {
	id: "level-up-your-game-roadmap-for-pickleball-mastery.md";
  slug: "level-up-your-game-roadmap-for-pickleball-mastery";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"loose-grip-secrets-and-strength-training-tips.md": {
	id: "loose-grip-secrets-and-strength-training-tips.md";
  slug: "loose-grip-secrets-and-strength-training-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maintain-pickleball-gear-for-long-term-use.md": {
	id: "maintain-pickleball-gear-for-long-term-use.md";
  slug: "maintain-pickleball-gear-for-long-term-use";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"major-league-pickleball-season-2-makes-waves.md": {
	id: "major-league-pickleball-season-2-makes-waves.md";
  slug: "major-league-pickleball-season-2-makes-waves";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"major-pickleball-tournaments-shake-up-the-scene.md": {
	id: "major-pickleball-tournaments-shake-up-the-scene.md";
  slug: "major-pickleball-tournaments-shake-up-the-scene";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-a-powerful-serve-in-pickleball-today.md": {
	id: "master-a-powerful-serve-in-pickleball-today.md";
  slug: "master-a-powerful-serve-in-pickleball-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-advanced-pickleball-techniques-with-pro-tips.md": {
	id: "master-advanced-pickleball-techniques-with-pro-tips.md";
  slug: "master-advanced-pickleball-techniques-with-pro-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-court-strategy-to-dominate-pickleball-matches.md": {
	id: "master-court-strategy-to-dominate-pickleball-matches.md";
  slug: "master-court-strategy-to-dominate-pickleball-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-defensive-strategies-in-pickleball-battles.md": {
	id: "master-defensive-strategies-in-pickleball-battles.md";
  slug: "master-defensive-strategies-in-pickleball-battles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-doubles-play-in-pickleball-win-with-strategy.md": {
	id: "master-doubles-play-in-pickleball-win-with-strategy.md";
  slug: "master-doubles-play-in-pickleball-win-with-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-footwork-for-winning-pickleball-plays.md": {
	id: "master-footwork-for-winning-pickleball-plays.md";
  slug: "master-footwork-for-winning-pickleball-plays";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-improving-pickleball-serve-with-tips-drills.md": {
	id: "master-improving-pickleball-serve-with-tips-drills.md";
  slug: "master-improving-pickleball-serve-with-tips-drills";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-movement-strategies-for-winning-pickleball-matches.md": {
	id: "master-movement-strategies-for-winning-pickleball-matches.md";
  slug: "master-movement-strategies-for-winning-pickleball-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-offensive-lobs-for-pickleball-court-domination.md": {
	id: "master-offensive-lobs-for-pickleball-court-domination.md";
  slug: "master-offensive-lobs-for-pickleball-court-domination";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-footwork-essential-tips-drills.md": {
	id: "master-pickleball-footwork-essential-tips-drills.md";
  slug: "master-pickleball-footwork-essential-tips-drills";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-footwork-for-court-success.md": {
	id: "master-pickleball-footwork-for-court-success.md";
  slug: "master-pickleball-footwork-for-court-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-grip-techniques-for-winning-play.md": {
	id: "master-pickleball-grip-techniques-for-winning-play.md";
  slug: "master-pickleball-grip-techniques-for-winning-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-performance-stay-low-for-success.md": {
	id: "master-pickleball-performance-stay-low-for-success.md";
  slug: "master-pickleball-performance-stay-low-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-precision-with-head-control.md": {
	id: "master-pickleball-precision-with-head-control.md";
  slug: "master-pickleball-precision-with-head-control";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-scoring-system-explained.md": {
	id: "master-pickleball-scoring-system-explained.md";
  slug: "master-pickleball-scoring-system-explained";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-strategy-dominate-with-downward-shots.md": {
	id: "master-pickleball-strategy-dominate-with-downward-shots.md";
  slug: "master-pickleball-strategy-dominate-with-downward-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-volleys-with-precision-and-finesse.md": {
	id: "master-pickleball-volleys-with-precision-and-finesse.md";
  slug: "master-pickleball-volleys-with-precision-and-finesse";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-pickleball-with-my-video-tutorials-guide.md": {
	id: "master-pickleball-with-my-video-tutorials-guide.md";
  slug: "master-pickleball-with-my-video-tutorials-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-short-returns-with-composure-for-wins.md": {
	id: "master-short-returns-with-composure-for-wins.md";
  slug: "master-short-returns-with-composure-for-wins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-aggressive-pickleball-dinking.md": {
	id: "master-the-art-of-aggressive-pickleball-dinking.md";
  slug: "master-the-art-of-aggressive-pickleball-dinking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-lobbing-in-pickleball.md": {
	id: "master-the-art-of-lobbing-in-pickleball.md";
  slug: "master-the-art-of-lobbing-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-pickleball-blocking.md": {
	id: "master-the-art-of-pickleball-blocking.md";
  slug: "master-the-art-of-pickleball-blocking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-pickleball-misdirection-shots.md": {
	id: "master-the-art-of-pickleball-misdirection-shots.md";
  slug: "master-the-art-of-pickleball-misdirection-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-precision-pickleball-dinking.md": {
	id: "master-the-art-of-precision-pickleball-dinking.md";
  slug: "master-the-art-of-precision-pickleball-dinking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-shot-disguise.md": {
	id: "master-the-art-of-shot-disguise.md";
  slug: "master-the-art-of-shot-disguise";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-stacking-in-pickleball.md": {
	id: "master-the-art-of-stacking-in-pickleball.md";
  slug: "master-the-art-of-stacking-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-the-dink-in-your-game.md": {
	id: "master-the-art-of-the-dink-in-your-game.md";
  slug: "master-the-art-of-the-dink-in-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-tweener-shots.md": {
	id: "master-the-art-of-tweener-shots.md";
  slug: "master-the-art-of-tweener-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-art-of-uncalculated-pickleball-strategy.md": {
	id: "master-the-art-of-uncalculated-pickleball-strategy.md";
  slug: "master-the-art-of-uncalculated-pickleball-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-atp-shot-for-pickleball-victory.md": {
	id: "master-the-atp-shot-for-pickleball-victory.md";
  slug: "master-the-atp-shot-for-pickleball-victory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-atp-shot-key-techniques-revealed.md": {
	id: "master-the-atp-shot-key-techniques-revealed.md";
  slug: "master-the-atp-shot-key-techniques-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-court-the-complete-guide-to-the-rules-of-pickleball.md": {
	id: "master-the-court-the-complete-guide-to-the-rules-of-pickleball.md";
  slug: "master-the-court-the-complete-guide-to-the-rules-of-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-essential-third-shot-drop-technique.md": {
	id: "master-the-essential-third-shot-drop-technique.md";
  slug: "master-the-essential-third-shot-drop-technique";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-lob-serve-for-pickleball-success.md": {
	id: "master-the-lob-serve-for-pickleball-success.md";
  slug: "master-the-lob-serve-for-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-lob-strategic-pickleball-maneuver.md": {
	id: "master-the-lob-strategic-pickleball-maneuver.md";
  slug: "master-the-lob-strategic-pickleball-maneuver";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-no-look-shot-pickleball-gamechanger.md": {
	id: "master-the-no-look-shot-pickleball-gamechanger.md";
  slug: "master-the-no-look-shot-pickleball-gamechanger";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-perfect-pickleball-paddle-grip.md": {
	id: "master-the-perfect-pickleball-paddle-grip.md";
  slug: "master-the-perfect-pickleball-paddle-grip";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-perfect-pickleball-serve-with-these-tips.md": {
	id: "master-the-perfect-pickleball-serve-with-these-tips.md";
  slug: "master-the-perfect-pickleball-serve-with-these-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-pickleball-court-block-vs-counterattack.md": {
	id: "master-the-pickleball-court-block-vs-counterattack.md";
  slug: "master-the-pickleball-court-block-vs-counterattack";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-scorpion-your-winning-pickleball-shot.md": {
	id: "master-the-scorpion-your-winning-pickleball-shot.md";
  slug: "master-the-scorpion-your-winning-pickleball-shot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-the-short-hop-dink-key-benefits.md": {
	id: "master-the-short-hop-dink-key-benefits.md";
  slug: "master-the-short-hop-dink-key-benefits";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-windy-conditions-with-these-pro-tips.md": {
	id: "master-windy-conditions-with-these-pro-tips.md";
  slug: "master-windy-conditions-with-these-pro-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"master-your-pickleball-backhand-with-these-tips.md": {
	id: "master-your-pickleball-backhand-with-these-tips.md";
  slug: "master-your-pickleball-backhand-with-these-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"masterful-dinking-strategy-for-winning-shots.md": {
	id: "masterful-dinking-strategy-for-winning-shots.md";
  slug: "masterful-dinking-strategy-for-winning-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"masterful-pickleball-serving-strategies-for-victorious-wins.md": {
	id: "masterful-pickleball-serving-strategies-for-victorious-wins.md";
  slug: "masterful-pickleball-serving-strategies-for-victorious-wins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"masterful-strategies-to-control-pickleball-pace.md": {
	id: "masterful-strategies-to-control-pickleball-pace.md";
  slug: "masterful-strategies-to-control-pickleball-pace";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"masterful-tactics-dominate-pickleball-with-aggressive-play.md": {
	id: "masterful-tactics-dominate-pickleball-with-aggressive-play.md";
  slug: "masterful-tactics-dominate-pickleball-with-aggressive-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-defense-against-sneaky-top-spin-drops.md": {
	id: "mastering-defense-against-sneaky-top-spin-drops.md";
  slug: "mastering-defense-against-sneaky-top-spin-drops";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-defense-tactics-against-the-pickleball-erne.md": {
	id: "mastering-defense-tactics-against-the-pickleball-erne.md";
  slug: "mastering-defense-tactics-against-the-pickleball-erne";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-dink-variety-elevates-pickleball-game.md": {
	id: "mastering-dink-variety-elevates-pickleball-game.md";
  slug: "mastering-dink-variety-elevates-pickleball-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-footwork-and-shot-selection-in-pickleball.md": {
	id: "mastering-footwork-and-shot-selection-in-pickleball.md";
  slug: "mastering-footwork-and-shot-selection-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-high-percentage-shots-in-pickleball.md": {
	id: "mastering-high-percentage-shots-in-pickleball.md";
  slug: "mastering-high-percentage-shots-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-kitchen-control-for-winning-advantage.md": {
	id: "mastering-kitchen-control-for-winning-advantage.md";
  slug: "mastering-kitchen-control-for-winning-advantage";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-momentum-strategies-for-pickleball-domination.md": {
	id: "mastering-momentum-strategies-for-pickleball-domination.md";
  slug: "mastering-momentum-strategies-for-pickleball-domination";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-offensive-pickleball-shots-low-net-tactics.md": {
	id: "mastering-offensive-pickleball-shots-low-net-tactics.md";
  slug: "mastering-offensive-pickleball-shots-low-net-tactics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-over-and-back-pickleball-shots-key-tips.md": {
	id: "mastering-over-and-back-pickleball-shots-key-tips.md";
  slug: "mastering-over-and-back-pickleball-shots-key-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-air-or-bounce-you-choose.md": {
	id: "mastering-pickleball-air-or-bounce-you-choose.md";
  slug: "mastering-pickleball-air-or-bounce-you-choose";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-angles-key-to-winning-strategies.md": {
	id: "mastering-pickleball-angles-key-to-winning-strategies.md";
  slug: "mastering-pickleball-angles-key-to-winning-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-doubles-secret-to-strength.md": {
	id: "mastering-pickleball-doubles-secret-to-strength.md";
  slug: "mastering-pickleball-doubles-secret-to-strength";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-elevate-your-game-strategically.md": {
	id: "mastering-pickleball-elevate-your-game-strategically.md";
  slug: "mastering-pickleball-elevate-your-game-strategically";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-essential-shots-guide.md": {
	id: "mastering-pickleball-essential-shots-guide.md";
  slug: "mastering-pickleball-essential-shots-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-etiquette-a-players-guide.md": {
	id: "mastering-pickleball-etiquette-a-players-guide.md";
  slug: "mastering-pickleball-etiquette-a-players-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-etiquette-the-ultimate-guide.md": {
	id: "mastering-pickleball-etiquette-the-ultimate-guide.md";
  slug: "mastering-pickleball-etiquette-the-ultimate-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-for-different-skill-levels.md": {
	id: "mastering-pickleball-for-different-skill-levels.md";
  slug: "mastering-pickleball-for-different-skill-levels";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-game-management-for-tournament-success.md": {
	id: "mastering-pickleball-game-management-for-tournament-success.md";
  slug: "mastering-pickleball-game-management-for-tournament-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-key-strategies-for-success.md": {
	id: "mastering-pickleball-key-strategies-for-success.md";
  slug: "mastering-pickleball-key-strategies-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-key-strategies-revealed.md": {
	id: "mastering-pickleball-key-strategies-revealed.md";
  slug: "mastering-pickleball-key-strategies-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-keys-to-peak-performance.md": {
	id: "mastering-pickleball-keys-to-peak-performance.md";
  slug: "mastering-pickleball-keys-to-peak-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-poaching-ultimate-strategy-guide.md": {
	id: "mastering-pickleball-poaching-ultimate-strategy-guide.md";
  slug: "mastering-pickleball-poaching-ultimate-strategy-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-seo-strategies-for-court-dominance.md": {
	id: "mastering-pickleball-seo-strategies-for-court-dominance.md";
  slug: "mastering-pickleball-seo-strategies-for-court-dominance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-shot-selection-for-wins.md": {
	id: "mastering-pickleball-shot-selection-for-wins.md";
  slug: "mastering-pickleball-shot-selection-for-wins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-smash-techniques-tips.md": {
	id: "mastering-pickleball-smash-techniques-tips.md";
  slug: "mastering-pickleball-smash-techniques-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-strategies-to-force-opponent-errors.md": {
	id: "mastering-pickleball-strategies-to-force-opponent-errors.md";
  slug: "mastering-pickleball-strategies-to-force-opponent-errors";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-strategy-101-for-wins.md": {
	id: "mastering-pickleball-strategy-101-for-wins.md";
  slug: "mastering-pickleball-strategy-101-for-wins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-techniques-for-competitive-success.md": {
	id: "mastering-pickleball-techniques-for-competitive-success.md";
  slug: "mastering-pickleball-techniques-for-competitive-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-transition-zone-tactics.md": {
	id: "mastering-pickleball-transition-zone-tactics.md";
  slug: "mastering-pickleball-transition-zone-tactics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pickleball-unlocking-non-volley-zone-strategies.md": {
	id: "mastering-pickleball-unlocking-non-volley-zone-strategies.md";
  slug: "mastering-pickleball-unlocking-non-volley-zone-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-pre-tournament-points-for-winning-edge.md": {
	id: "mastering-pre-tournament-points-for-winning-edge.md";
  slug: "mastering-pre-tournament-points-for-winning-edge";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-responses-to-net-cord-pickleball-shots.md": {
	id: "mastering-responses-to-net-cord-pickleball-shots.md";
  slug: "mastering-responses-to-net-cord-pickleball-shots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-singles-pickleball-strategies-for-success.md": {
	id: "mastering-singles-pickleball-strategies-for-success.md";
  slug: "mastering-singles-pickleball-strategies-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-skills-the-power-of-drilling.md": {
	id: "mastering-skills-the-power-of-drilling.md";
  slug: "mastering-skills-the-power-of-drilling";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-skinny-singles-essential-pickleball-strategies.md": {
	id: "mastering-skinny-singles-essential-pickleball-strategies.md";
  slug: "mastering-skinny-singles-essential-pickleball-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-soft-shots-key-to-pickleball-success.md": {
	id: "mastering-soft-shots-key-to-pickleball-success.md";
  slug: "mastering-soft-shots-key-to-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-spin-control-dominate-the-pickleball-court.md": {
	id: "mastering-spin-control-dominate-the-pickleball-court.md";
  slug: "mastering-spin-control-dominate-the-pickleball-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-strategies-to-dominate-pickleball-lobbers.md": {
	id: "mastering-strategies-to-dominate-pickleball-lobbers.md";
  slug: "mastering-strategies-to-dominate-pickleball-lobbers";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-art-of-attacking-pickleball-balls.md": {
	id: "mastering-the-art-of-attacking-pickleball-balls.md";
  slug: "mastering-the-art-of-attacking-pickleball-balls";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-art-of-disconnection-in-pickleball.md": {
	id: "mastering-the-art-of-disconnection-in-pickleball.md";
  slug: "mastering-the-art-of-disconnection-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-art-of-pickleball-scoring.md": {
	id: "mastering-the-art-of-pickleball-scoring.md";
  slug: "mastering-the-art-of-pickleball-scoring";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-art-of-shape-in-pickleball.md": {
	id: "mastering-the-art-of-shape-in-pickleball.md";
  slug: "mastering-the-art-of-shape-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-basics-beginners-pickleball-guide-2.md": {
	id: "mastering-the-basics-beginners-pickleball-guide-2.md";
  slug: "mastering-the-basics-beginners-pickleball-guide-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-basics-beginners-pickleball-guide.md": {
	id: "mastering-the-basics-beginners-pickleball-guide.md";
  slug: "mastering-the-basics-beginners-pickleball-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-flamingo-pickleballs-secret-weapon.md": {
	id: "mastering-the-flamingo-pickleballs-secret-weapon.md";
  slug: "mastering-the-flamingo-pickleballs-secret-weapon";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-kitchen-line-strategic-pickleball-play.md": {
	id: "mastering-the-kitchen-line-strategic-pickleball-play.md";
  slug: "mastering-the-kitchen-line-strategic-pickleball-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-pickleball-crosscourt-expert-strategies-unleashed.md": {
	id: "mastering-the-pickleball-crosscourt-expert-strategies-unleashed.md";
  slug: "mastering-the-pickleball-crosscourt-expert-strategies-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-pickleball-lob-expert-tactics-revealed.md": {
	id: "mastering-the-pickleball-lob-expert-tactics-revealed.md";
  slug: "mastering-the-pickleball-lob-expert-tactics-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-pickleball-lob-strategy-tips.md": {
	id: "mastering-the-pickleball-lob-strategy-tips.md";
  slug: "mastering-the-pickleball-lob-strategy-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-the-pickleball-tournament-expert-tips-inside.md": {
	id: "mastering-the-pickleball-tournament-expert-tips-inside.md";
  slug: "mastering-the-pickleball-tournament-expert-tips-inside";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-third-shot-placement-in-pickleball-courts.md": {
	id: "mastering-third-shot-placement-in-pickleball-courts.md";
  slug: "mastering-third-shot-placement-in-pickleball-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mastering-wind-dynamics-for-optimal-pickleball-performance.md": {
	id: "mastering-wind-dynamics-for-optimal-pickleball-performance.md";
  slug: "mastering-wind-dynamics-for-optimal-pickleball-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-pickleball-performance-expert-court-strategies-revealed.md": {
	id: "maximize-pickleball-performance-expert-court-strategies-revealed.md";
  slug: "maximize-pickleball-performance-expert-court-strategies-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-pickleball-performance-with-time-mastery.md": {
	id: "maximize-pickleball-performance-with-time-mastery.md";
  slug: "maximize-pickleball-performance-with-time-mastery";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-pickleball-serve-power-with-torque.md": {
	id: "maximize-pickleball-serve-power-with-torque.md";
  slug: "maximize-pickleball-serve-power-with-torque";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-rewards-with-pickleball-brand-loyalty-programs.md": {
	id: "maximize-rewards-with-pickleball-brand-loyalty-programs.md";
  slug: "maximize-rewards-with-pickleball-brand-loyalty-programs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-your-game-with-paddle-spin-techniques.md": {
	id: "maximize-your-game-with-paddle-spin-techniques.md";
  slug: "maximize-your-game-with-paddle-spin-techniques";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximize-your-pickleball-paddle-performance-swing-twist-weight.md": {
	id: "maximize-your-pickleball-paddle-performance-swing-twist-weight.md";
  slug: "maximize-your-pickleball-paddle-performance-swing-twist-weight";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maximizing-pickleball-skills-with-video-analysis.md": {
	id: "maximizing-pickleball-skills-with-video-analysis.md";
  slug: "maximizing-pickleball-skills-with-video-analysis";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"maxtac-tacky-pickleball-overgrip-in-depth-review-pros-cons.md": {
	id: "maxtac-tacky-pickleball-overgrip-in-depth-review-pros-cons.md";
  slug: "maxtac-tacky-pickleball-overgrip-in-depth-review-pros-cons";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mental-game-of-pickleball-stay-calm-under-stress.md": {
	id: "mental-game-of-pickleball-stay-calm-under-stress.md";
  slug: "mental-game-of-pickleball-stay-calm-under-stress";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mental-toughness-in-pickleball-boost-your-game.md": {
	id: "mental-toughness-in-pickleball-boost-your-game.md";
  slug: "mental-toughness-in-pickleball-boost-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mind-games-elevate-pickleball-pro-strategies-revealed.md": {
	id: "mind-games-elevate-pickleball-pro-strategies-revealed.md";
  slug: "mind-games-elevate-pickleball-pro-strategies-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mind-games-matter-in-pickleball-victory.md": {
	id: "mind-games-matter-in-pickleball-victory.md";
  slug: "mind-games-matter-in-pickleball-victory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mixed-doubles-strategy-maximizing-court-advantage.md": {
	id: "mixed-doubles-strategy-maximizing-court-advantage.md";
  slug: "mixed-doubles-strategy-maximizing-court-advantage";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"mten-pickleball-paddles-are-they-right-for-you.md": {
	id: "mten-pickleball-paddles-are-they-right-for-you.md";
  slug: "mten-pickleball-paddles-are-they-right-for-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-verdict-on-top-pickleball-clinics-reviews.md": {
	id: "my-verdict-on-top-pickleball-clinics-reviews.md";
  slug: "my-verdict-on-top-pickleball-clinics-reviews";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"nail-biting-challenges-in-winning-pickleball-points.md": {
	id: "nail-biting-challenges-in-winning-pickleball-points.md";
  slug: "nail-biting-challenges-in-winning-pickleball-points";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"national-champions-share-top-pickleball-insights.md": {
	id: "national-champions-share-top-pickleball-insights.md";
  slug: "national-champions-share-top-pickleball-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"navigating-pickleball-legal-issues-insights-tips.md": {
	id: "navigating-pickleball-legal-issues-insights-tips.md";
  slug: "navigating-pickleball-legal-issues-insights-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"navigating-pickleball-local-tournaments-near-me.md": {
	id: "navigating-pickleball-local-tournaments-near-me.md";
  slug: "navigating-pickleball-local-tournaments-near-me";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"net-play-rules-mastering-pickleball-tactics.md": {
	id: "net-play-rules-mastering-pickleball-tactics.md";
  slug: "net-play-rules-mastering-pickleball-tactics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"net-post-decisive-game-changer.md": {
	id: "net-post-decisive-game-changer.md";
  slug: "net-post-decisive-game-changer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"net-violations-the-pickleball-penalty-zone.md": {
	id: "net-violations-the-pickleball-penalty-zone.md";
  slug: "net-violations-the-pickleball-penalty-zone";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"new-carbon-fiber-paddles-enhance-performance.md": {
	id: "new-carbon-fiber-paddles-enhance-performance.md";
  slug: "new-carbon-fiber-paddles-enhance-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"new-pickleball-shot-revolutionizes-court-strategy.md": {
	id: "new-pickleball-shot-revolutionizes-court-strategy.md";
  slug: "new-pickleball-shot-revolutionizes-court-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"north-carolina-pickleball-tournament-guide.md": {
	id: "north-carolina-pickleball-tournament-guide.md";
  slug: "north-carolina-pickleball-tournament-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimal-pickleball-hydration-strategies-for-players.md": {
	id: "optimal-pickleball-hydration-strategies-for-players.md";
  slug: "optimal-pickleball-hydration-strategies-for-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimal-pickleball-nutrition-tips-for-players.md": {
	id: "optimal-pickleball-nutrition-tips-for-players.md";
  slug: "optimal-pickleball-nutrition-tips-for-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimize-play-nutrition-and-fitness-for-pickleball-players.md": {
	id: "optimize-play-nutrition-and-fitness-for-pickleball-players.md";
  slug: "optimize-play-nutrition-and-fitness-for-pickleball-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimize-your-game-with-pickleball-ecommerce-solutions.md": {
	id: "optimize-your-game-with-pickleball-ecommerce-solutions.md";
  slug: "optimize-your-game-with-pickleball-ecommerce-solutions";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimizing-direction-shifts-in-pickleball-strategy.md": {
	id: "optimizing-direction-shifts-in-pickleball-strategy.md";
  slug: "optimizing-direction-shifts-in-pickleball-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimizing-pickleball-branding-strategies-for-growth.md": {
	id: "optimizing-pickleball-branding-strategies-for-growth.md";
  slug: "optimizing-pickleball-branding-strategies-for-growth";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"optimizing-profit-pickleball-retail-strategies.md": {
	id: "optimizing-profit-pickleball-retail-strategies.md";
  slug: "optimizing-profit-pickleball-retail-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"outdoor-pickleball-courts-near-me-finding-the-best-locations.md": {
	id: "outdoor-pickleball-courts-near-me-finding-the-best-locations.md";
  slug: "outdoor-pickleball-courts-near-me-finding-the-best-locations";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"overcoming-fear-and-perfecting-pickleball-serves.md": {
	id: "overcoming-fear-and-perfecting-pickleball-serves.md";
  slug: "overcoming-fear-and-perfecting-pickleball-serves";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"owl-pickleball-paddle-a-complete-review.md": {
	id: "owl-pickleball-paddle-a-complete-review.md";
  slug: "owl-pickleball-paddle-a-complete-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ozempic-ad-critique-sparks-pickleball-controversy.md": {
	id: "ozempic-ad-critique-sparks-pickleball-controversy.md";
  slug: "ozempic-ad-critique-sparks-pickleball-controversy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"paddle-grit-guide-choose-the-right-texture.md": {
	id: "paddle-grit-guide-choose-the-right-texture.md";
  slug: "paddle-grit-guide-choose-the-right-texture";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"paddle-identity-crisis-avoid-mix-ups.md": {
	id: "paddle-identity-crisis-avoid-mix-ups.md";
  slug: "paddle-identity-crisis-avoid-mix-ups";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"paddle-power-carbon-fiber-pickleball-paddles-reviewed.md": {
	id: "paddle-power-carbon-fiber-pickleball-paddles-reviewed.md";
  slug: "paddle-power-carbon-fiber-pickleball-paddles-reviewed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"paddle-selection-decoded-find-your-perfect-match.md": {
	id: "paddle-selection-decoded-find-your-perfect-match.md";
  slug: "paddle-selection-decoded-find-your-perfect-match";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"paddletek-tempest-v3-elite-pickleball-paddle.md": {
	id: "paddletek-tempest-v3-elite-pickleball-paddle.md";
  slug: "paddletek-tempest-v3-elite-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"perfect-your-pickleball-serve-underhand-mastery.md": {
	id: "perfect-your-pickleball-serve-underhand-mastery.md";
  slug: "perfect-your-pickleball-serve-underhand-mastery";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"persist-and-prevail-pickleballs-resilience-lessons.md": {
	id: "persist-and-prevail-pickleballs-resilience-lessons.md";
  slug: "persist-and-prevail-pickleballs-resilience-lessons";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"personalize-your-pickleball-paddle-with-accessories.md": {
	id: "personalize-your-pickleball-paddle-with-accessories.md";
  slug: "personalize-your-pickleball-paddle-with-accessories";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"personalized-pickleball-paddles-make-your-paddle-unique.md": {
	id: "personalized-pickleball-paddles-make-your-paddle-unique.md";
  slug: "personalized-pickleball-paddles-make-your-paddle-unique";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"personalized-pickleball-training-for-success-plan.md": {
	id: "personalized-pickleball-training-for-success-plan.md";
  slug: "personalized-pickleball-training-for-success-plan";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-advice-overload.md": {
	id: "pickleball-advice-overload.md";
  slug: "pickleball-advice-overload";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-and-health-latest-research-insights.md": {
	id: "pickleball-and-health-latest-research-insights.md";
  slug: "pickleball-and-health-latest-research-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-awards-and-recognitions-guide-2023.md": {
	id: "pickleball-awards-and-recognitions-guide-2023.md";
  slug: "pickleball-awards-and-recognitions-guide-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-bag-roundup-top-picks-for-every-player.md": {
	id: "pickleball-bag-roundup-top-picks-for-every-player.md";
  slug: "pickleball-bag-roundup-top-picks-for-every-player";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-balls-guide-selection-maintenance.md": {
	id: "pickleball-balls-guide-selection-maintenance.md";
  slug: "pickleball-balls-guide-selection-maintenance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-bar-combining-socializing-and-sport.md": {
	id: "pickleball-bar-combining-socializing-and-sport.md";
  slug: "pickleball-bar-combining-socializing-and-sport";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-breakthrough-mind-over-racket.md": {
	id: "pickleball-breakthrough-mind-over-racket.md";
  slug: "pickleball-breakthrough-mind-over-racket";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-camps-of-dreams-uncovered.md": {
	id: "pickleball-camps-of-dreams-uncovered.md";
  slug: "pickleball-camps-of-dreams-uncovered";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-celebrities-media-and-community-unite.md": {
	id: "pickleball-celebrities-media-and-community-unite.md";
  slug: "pickleball-celebrities-media-and-community-unite";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-central-coupon-code-save-on-your-gear.md": {
	id: "pickleball-central-coupon-code-save-on-your-gear.md";
  slug: "pickleball-central-coupon-code-save-on-your-gear";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-charity-event-unites-community-in-boise.md": {
	id: "pickleball-charity-event-unites-community-in-boise.md";
  slug: "pickleball-charity-event-unites-community-in-boise";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-charity-events-impact-through-sport.md": {
	id: "pickleball-charity-events-impact-through-sport.md";
  slug: "pickleball-charity-events-impact-through-sport";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-charity-events-support-serve-fun.md": {
	id: "pickleball-charity-events-support-serve-fun.md";
  slug: "pickleball-charity-events-support-serve-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-classes-improving-your-skills-with-expert-coaching.md": {
	id: "pickleball-classes-improving-your-skills-with-expert-coaching.md";
  slug: "pickleball-classes-improving-your-skills-with-expert-coaching";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-classes-near-me-find-the-best-coaching.md": {
	id: "pickleball-classes-near-me-find-the-best-coaching.md";
  slug: "pickleball-classes-near-me-find-the-best-coaching";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-clothes-what-to-wear-for-optimal-performance.md": {
	id: "pickleball-clothes-what-to-wear-for-optimal-performance.md";
  slug: "pickleball-clothes-what-to-wear-for-optimal-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-clothing-the-best-gear-for-your-game.md": {
	id: "pickleball-clothing-the-best-gear-for-your-game.md";
  slug: "pickleball-clothing-the-best-gear-for-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-club-guide-facilities-features-memberships.md": {
	id: "pickleball-club-guide-facilities-features-memberships.md";
  slug: "pickleball-club-guide-facilities-features-memberships";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-clubs-near-me-how-to-find-the-best-ones.md": {
	id: "pickleball-clubs-near-me-how-to-find-the-best-ones.md";
  slug: "pickleball-clubs-near-me-how-to-find-the-best-ones";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-coaching-certification-a-comprehensive-guide.md": {
	id: "pickleball-coaching-certification-a-comprehensive-guide.md";
  slug: "pickleball-coaching-certification-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-community-elevates-paddle-testing-standards.md": {
	id: "pickleball-community-elevates-paddle-testing-standards.md";
  slug: "pickleball-community-elevates-paddle-testing-standards";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-community-events-your-guide-to-fun-play.md": {
	id: "pickleball-community-events-your-guide-to-fun-play.md";
  slug: "pickleball-community-events-your-guide-to-fun-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-community-thrives-at-boca-raton-masters.md": {
	id: "pickleball-community-thrives-at-boca-raton-masters.md";
  slug: "pickleball-community-thrives-at-boca-raton-masters";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-competitive-analysis-key-insights-revealed.md": {
	id: "pickleball-competitive-analysis-key-insights-revealed.md";
  slug: "pickleball-competitive-analysis-key-insights-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-content-creation-tips-for-engagement.md": {
	id: "pickleball-content-creation-tips-for-engagement.md";
  slug: "pickleball-content-creation-tips-for-engagement";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-color-schemes-a-comprehensive-guide.md": {
	id: "pickleball-court-color-schemes-a-comprehensive-guide.md";
  slug: "pickleball-court-color-schemes-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-construction-costs-a-comprehensive-guide.md": {
	id: "pickleball-court-construction-costs-a-comprehensive-guide.md";
  slug: "pickleball-court-construction-costs-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-dimensions-a-comprehensive-guide.md": {
	id: "pickleball-court-dimensions-a-comprehensive-guide.md";
  slug: "pickleball-court-dimensions-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-dimensions-guide-specs.md": {
	id: "pickleball-court-dimensions-guide-specs.md";
  slug: "pickleball-court-dimensions-guide-specs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-dimensions-in-feet-a-complete-guide.md": {
	id: "pickleball-court-dimensions-in-feet-a-complete-guide.md";
  slug: "pickleball-court-dimensions-in-feet-a-complete-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-etiquette-master-unwritten-rules.md": {
	id: "pickleball-court-etiquette-master-unwritten-rules.md";
  slug: "pickleball-court-etiquette-master-unwritten-rules";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-fencing-guide.md": {
	id: "pickleball-court-fencing-guide.md";
  slug: "pickleball-court-fencing-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-layout-options-a-comprehensive-guide.md": {
	id: "pickleball-court-layout-options-a-comprehensive-guide.md";
  slug: "pickleball-court-layout-options-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-lighting-standards-a-comprehensive-guide.md": {
	id: "pickleball-court-lighting-standards-a-comprehensive-guide.md";
  slug: "pickleball-court-lighting-standards-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-lighting-the-ultimate-guide.md": {
	id: "pickleball-court-lighting-the-ultimate-guide.md";
  slug: "pickleball-court-lighting-the-ultimate-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-maintenance-essential-tips.md": {
	id: "pickleball-court-maintenance-essential-tips.md";
  slug: "pickleball-court-maintenance-essential-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-mastery-tactics-for-success.md": {
	id: "pickleball-court-mastery-tactics-for-success.md";
  slug: "pickleball-court-mastery-tactics-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-orientation-guide.md": {
	id: "pickleball-court-orientation-guide.md";
  slug: "pickleball-court-orientation-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-rental-rates-a-comprehensive-guide.md": {
	id: "pickleball-court-rental-rates-a-comprehensive-guide.md";
  slug: "pickleball-court-rental-rates-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-resurfacing-a-comprehensive-guide.md": {
	id: "pickleball-court-resurfacing-a-comprehensive-guide.md";
  slug: "pickleball-court-resurfacing-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-seating-arrangement-guide.md": {
	id: "pickleball-court-seating-arrangement-guide.md";
  slug: "pickleball-court-seating-arrangement-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-soundproofing-a-comprehensive-guide.md": {
	id: "pickleball-court-soundproofing-a-comprehensive-guide.md";
  slug: "pickleball-court-soundproofing-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-success-unleash-the-captains-power.md": {
	id: "pickleball-court-success-unleash-the-captains-power.md";
  slug: "pickleball-court-success-unleash-the-captains-power";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-surface-types-a-comprehensive-guide.md": {
	id: "pickleball-court-surface-types-a-comprehensive-guide.md";
  slug: "pickleball-court-surface-types-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-court-windscreen-installation-guide.md": {
	id: "pickleball-court-windscreen-installation-guide.md";
  slug: "pickleball-court-windscreen-installation-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-courts-boost-property-values-and-appeal.md": {
	id: "pickleball-courts-boost-property-values-and-appeal.md";
  slug: "pickleball-courts-boost-property-values-and-appeal";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-courts-heat-up-with-gambling-action.md": {
	id: "pickleball-courts-heat-up-with-gambling-action.md";
  slug: "pickleball-courts-heat-up-with-gambling-action";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-craze-sweeps-media-outlets.md": {
	id: "pickleball-craze-sweeps-media-outlets.md";
  slug: "pickleball-craze-sweeps-media-outlets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-data-analytics-unveiling-game-insights.md": {
	id: "pickleball-data-analytics-unveiling-game-insights.md";
  slug: "pickleball-data-analytics-unveiling-game-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-dinking-101-the-golden-rule.md": {
	id: "pickleball-dinking-101-the-golden-rule.md";
  slug: "pickleball-dinking-101-the-golden-rule";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-domination-strategy-guide-for-singles-and-doubles.md": {
	id: "pickleball-domination-strategy-guide-for-singles-and-doubles.md";
  slug: "pickleball-domination-strategy-guide-for-singles-and-doubles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-doubles-domination-a-comprehensive-strategy-guide.md": {
	id: "pickleball-doubles-domination-a-comprehensive-strategy-guide.md";
  slug: "pickleball-doubles-domination-a-comprehensive-strategy-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-doubles-unveiling-the-balance-rule.md": {
	id: "pickleball-doubles-unveiling-the-balance-rule.md";
  slug: "pickleball-doubles-unveiling-the-balance-rule";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-drama-handling-broken-ball-disputes.md": {
	id: "pickleball-drama-handling-broken-ball-disputes.md";
  slug: "pickleball-drama-handling-broken-ball-disputes";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-drama-indented-balls-replay-rule.md": {
	id: "pickleball-drama-indented-balls-replay-rule.md";
  slug: "pickleball-drama-indented-balls-replay-rule";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-drama-unfolds-sportsmanship-triumphs-on-court.md": {
	id: "pickleball-drama-unfolds-sportsmanship-triumphs-on-court.md";
  slug: "pickleball-drama-unfolds-sportsmanship-triumphs-on-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-drills-for-beginners-skills-boost.md": {
	id: "pickleball-drills-for-beginners-skills-boost.md";
  slug: "pickleball-drills-for-beginners-skills-boost";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-drills-for-intermediate-players-a-comprehensive-guide.md": {
	id: "pickleball-drills-for-intermediate-players-a-comprehensive-guide.md";
  slug: "pickleball-drills-for-intermediate-players-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-economic-impact-on-local-communities.md": {
	id: "pickleball-economic-impact-on-local-communities.md";
  slug: "pickleball-economic-impact-on-local-communities";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-empowers-youth-national-local-initiatives.md": {
	id: "pickleball-empowers-youth-national-local-initiatives.md";
  slug: "pickleball-empowers-youth-national-local-initiatives";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-enthusiast-creates-heartwarming-community-bond.md": {
	id: "pickleball-enthusiast-creates-heartwarming-community-bond.md";
  slug: "pickleball-enthusiast-creates-heartwarming-community-bond";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-equipment-paddle-ball-selection.md": {
	id: "pickleball-equipment-paddle-ball-selection.md";
  slug: "pickleball-equipment-paddle-ball-selection";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-etiquette-a-comprehensive-guide.md": {
	id: "pickleball-etiquette-a-comprehensive-guide.md";
  slug: "pickleball-etiquette-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-etiquette-be-a-great-court-citizen.md": {
	id: "pickleball-etiquette-be-a-great-court-citizen.md";
  slug: "pickleball-etiquette-be-a-great-court-citizen";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-expansion-hindered-by-court-shortage.md": {
	id: "pickleball-expansion-hindered-by-court-shortage.md";
  slug: "pickleball-expansion-hindered-by-court-shortage";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-eyes-future-olympic-debut.md": {
	id: "pickleball-eyes-future-olympic-debut.md";
  slug: "pickleball-eyes-future-olympic-debut";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-family-activities-fun-for-all-ages.md": {
	id: "pickleball-family-activities-fun-for-all-ages.md";
  slug: "pickleball-family-activities-fun-for-all-ages";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-faults-deciphering-the-blame.md": {
	id: "pickleball-faults-deciphering-the-blame.md";
  slug: "pickleball-faults-deciphering-the-blame";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-faults-enforcing-the-no-volley-rule.md": {
	id: "pickleball-faults-enforcing-the-no-volley-rule.md";
  slug: "pickleball-faults-enforcing-the-no-volley-rule";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-festivals-guide-for-enthusiasts-events.md": {
	id: "pickleball-festivals-guide-for-enthusiasts-events.md";
  slug: "pickleball-festivals-guide-for-enthusiasts-events";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-fever-join-the-fun.md": {
	id: "pickleball-fever-join-the-fun.md";
  slug: "pickleball-fever-join-the-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-fitness-boost-your-game-with-exercises.md": {
	id: "pickleball-fitness-boost-your-game-with-exercises.md";
  slug: "pickleball-fitness-boost-your-game-with-exercises";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-for-seniors-fun-fitness-combined.md": {
	id: "pickleball-for-seniors-fun-fitness-combined.md";
  slug: "pickleball-for-seniors-fun-fitness-combined";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-game-mastery-essential-organizing-tips.md": {
	id: "pickleball-game-mastery-essential-organizing-tips.md";
  slug: "pickleball-game-mastery-essential-organizing-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-hat-choosing-the-best-headwear-for-the-game.md": {
	id: "pickleball-hat-choosing-the-best-headwear-for-the-game.md";
  slug: "pickleball-hat-choosing-the-best-headwear-for-the-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-health-benefits-stay-fit-have-fun.md": {
	id: "pickleball-health-benefits-stay-fit-have-fun.md";
  slug: "pickleball-health-benefits-stay-fit-have-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-in-austin-top-spots-and-local-scene.md": {
	id: "pickleball-in-austin-top-spots-and-local-scene.md";
  slug: "pickleball-in-austin-top-spots-and-local-scene";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-in-different-climates-gear-play-tips.md": {
	id: "pickleball-in-different-climates-gear-play-tips.md";
  slug: "pickleball-in-different-climates-gear-play-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-in-san-antonio-where-to-play-and-join-clubs.md": {
	id: "pickleball-in-san-antonio-where-to-play-and-join-clubs.md";
  slug: "pickleball-in-san-antonio-where-to-play-and-join-clubs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-in-the-olympics-how-close-are-we.md": {
	id: "pickleball-in-the-olympics-how-close-are-we.md";
  slug: "pickleball-in-the-olympics-how-close-are-we";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-influencer-collaborations-my-strategies.md": {
	id: "pickleball-influencer-collaborations-my-strategies.md";
  slug: "pickleball-influencer-collaborations-my-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-innovator-transforms-community-through-purpose.md": {
	id: "pickleball-innovator-transforms-community-through-purpose.md";
  slug: "pickleball-innovator-transforms-community-through-purpose";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-inspires-workplace-culture-transformation.md": {
	id: "pickleball-inspires-workplace-culture-transformation.md";
  slug: "pickleball-inspires-workplace-culture-transformation";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-language-translations-for-global-players.md": {
	id: "pickleball-language-translations-for-global-players.md";
  slug: "pickleball-language-translations-for-global-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-league-near-me-joining-and-competing-locally.md": {
	id: "pickleball-league-near-me-joining-and-competing-locally.md";
  slug: "pickleball-league-near-me-joining-and-competing-locally";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-leagues-joining-competing-and-enjoying.md": {
	id: "pickleball-leagues-joining-competing-and-enjoying.md";
  slug: "pickleball-leagues-joining-competing-and-enjoying";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-lessons-learn-to-play-like-a-pro.md": {
	id: "pickleball-lessons-learn-to-play-like-a-pro.md";
  slug: "pickleball-lessons-learn-to-play-like-a-pro";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-line-calls-crucial-timing-for-fairness.md": {
	id: "pickleball-line-calls-crucial-timing-for-fairness.md";
  slug: "pickleball-line-calls-crucial-timing-for-fairness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-makes-epic-tv-debut.md": {
	id: "pickleball-makes-epic-tv-debut.md";
  slug: "pickleball-makes-epic-tv-debut";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-match-drama-paddle-mishap-crisis.md": {
	id: "pickleball-match-drama-paddle-mishap-crisis.md";
  slug: "pickleball-match-drama-paddle-mishap-crisis";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-mental-health-boost-my-journey.md": {
	id: "pickleball-mental-health-boost-my-journey.md";
  slug: "pickleball-mental-health-boost-my-journey";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-mental-strategies-a-comprehensive-guide.md": {
	id: "pickleball-mental-strategies-a-comprehensive-guide.md";
  slug: "pickleball-mental-strategies-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-multicultural-marketing-strategies-unveiled.md": {
	id: "pickleball-multicultural-marketing-strategies-unveiled.md";
  slug: "pickleball-multicultural-marketing-strategies-unveiled";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-near-finding-the-best-places-to-play.md": {
	id: "pickleball-near-finding-the-best-places-to-play.md";
  slug: "pickleball-near-finding-the-best-places-to-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-net-height-guide.md": {
	id: "pickleball-net-height-guide.md";
  slug: "pickleball-net-height-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-net-system-installation-guide.md": {
	id: "pickleball-net-system-installation-guide.md";
  slug: "pickleball-net-system-installation-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-noise-hinders-sports-expansion-plans.md": {
	id: "pickleball-noise-hinders-sports-expansion-plans.md";
  slug: "pickleball-noise-hinders-sports-expansion-plans";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-orlando-best-courts-and-clubs.md": {
	id: "pickleball-orlando-best-courts-and-clubs.md";
  slug: "pickleball-orlando-best-courts-and-clubs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-balance-point-guide.md": {
	id: "pickleball-paddle-balance-point-guide.md";
  slug: "pickleball-paddle-balance-point-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-color-regulation-sparks-controversy.md": {
	id: "pickleball-paddle-color-regulation-sparks-controversy.md";
  slug: "pickleball-paddle-color-regulation-sparks-controversy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-core-materials-a-comprehensive-guide.md": {
	id: "pickleball-paddle-core-materials-a-comprehensive-guide.md";
  slug: "pickleball-paddle-core-materials-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-cover-protecting-your-equipment.md": {
	id: "pickleball-paddle-cover-protecting-your-equipment.md";
  slug: "pickleball-paddle-cover-protecting-your-equipment";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-deflection-test-a-comprehensive-guide.md": {
	id: "pickleball-paddle-deflection-test-a-comprehensive-guide.md";
  slug: "pickleball-paddle-deflection-test-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-edge-guard-repair-guide.md": {
	id: "pickleball-paddle-edge-guard-repair-guide.md";
  slug: "pickleball-paddle-edge-guard-repair-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-face-textures-a-comprehensive-guide.md": {
	id: "pickleball-paddle-face-textures-a-comprehensive-guide.md";
  slug: "pickleball-paddle-face-textures-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-grip-size-guide.md": {
	id: "pickleball-paddle-grip-size-guide.md";
  slug: "pickleball-paddle-grip-size-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-grips-guide-types-choosing-tips.md": {
	id: "pickleball-paddle-grips-guide-types-choosing-tips.md";
  slug: "pickleball-paddle-grips-guide-types-choosing-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-guide-maximizing-performance-with-foam-core-technology.md": {
	id: "pickleball-paddle-guide-maximizing-performance-with-foam-core-technology.md";
  slug: "pickleball-paddle-guide-maximizing-performance-with-foam-core-technology";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-handle-shapes-a-comprehensive-guide.md": {
	id: "pickleball-paddle-handle-shapes-a-comprehensive-guide.md";
  slug: "pickleball-paddle-handle-shapes-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-materials-a-comprehensive-guide.md": {
	id: "pickleball-paddle-materials-a-comprehensive-guide.md";
  slug: "pickleball-paddle-materials-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-overgrip-application-a-comprehensive-guide.md": {
	id: "pickleball-paddle-overgrip-application-a-comprehensive-guide.md";
  slug: "pickleball-paddle-overgrip-application-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-revolutionizes-competitive-gameplay.md": {
	id: "pickleball-paddle-revolutionizes-competitive-gameplay.md";
  slug: "pickleball-paddle-revolutionizes-competitive-gameplay";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-sale-how-to-find-the-best-deals.md": {
	id: "pickleball-paddle-sale-how-to-find-the-best-deals.md";
  slug: "pickleball-paddle-sale-how-to-find-the-best-deals";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-surface-roughness-a-comprehensive-guide.md": {
	id: "pickleball-paddle-surface-roughness-a-comprehensive-guide.md";
  slug: "pickleball-paddle-surface-roughness-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-swing-analysis-a-comprehensive-guide.md": {
	id: "pickleball-paddle-swing-analysis-a-comprehensive-guide.md";
  slug: "pickleball-paddle-swing-analysis-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-swing-weight-guide.md": {
	id: "pickleball-paddle-swing-weight-guide.md";
  slug: "pickleball-paddle-swing-weight-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-technology-innovations-you-should-know-about.md": {
	id: "pickleball-paddle-technology-innovations-you-should-know-about.md";
  slug: "pickleball-paddle-technology-innovations-you-should-know-about";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddle-weight-guide.md": {
	id: "pickleball-paddle-weight-guide.md";
  slug: "pickleball-paddle-weight-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-paddles-your-ace-against-tennis-elbow.md": {
	id: "pickleball-paddles-your-ace-against-tennis-elbow.md";
  slug: "pickleball-paddles-your-ace-against-tennis-elbow";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-partnerships-put-to-the-test.md": {
	id: "pickleball-partnerships-put-to-the-test.md";
  slug: "pickleball-partnerships-put-to-the-test";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-perfection-3-game-changing-tips-revealed.md": {
	id: "pickleball-perfection-3-game-changing-tips-revealed.md";
  slug: "pickleball-perfection-3-game-changing-tips-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-perfection-silence-the-sidelines.md": {
	id: "pickleball-perfection-silence-the-sidelines.md";
  slug: "pickleball-perfection-silence-the-sidelines";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-performance-hinges-on-decisiveness.md": {
	id: "pickleball-performance-hinges-on-decisiveness.md";
  slug: "pickleball-performance-hinges-on-decisiveness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-performance-secrets-revealed.md": {
	id: "pickleball-performance-secrets-revealed.md";
  slug: "pickleball-performance-secrets-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-performance-weathers-impact-unveiled.md": {
	id: "pickleball-performance-weathers-impact-unveiled.md";
  slug: "pickleball-performance-weathers-impact-unveiled";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-photography-capturing-court-action.md": {
	id: "pickleball-photography-capturing-court-action.md";
  slug: "pickleball-photography-capturing-court-action";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-play-rules-revealed.md": {
	id: "pickleball-play-rules-revealed.md";
  slug: "pickleball-play-rules-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-player-positioning-the-winning-strategy.md": {
	id: "pickleball-player-positioning-the-winning-strategy.md";
  slug: "pickleball-player-positioning-the-winning-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-2022-etiquette-and-behavior-guide.md": {
	id: "pickleball-players-2022-etiquette-and-behavior-guide.md";
  slug: "pickleball-players-2022-etiquette-and-behavior-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-balancing-consistency-and-speed-crucially.md": {
	id: "pickleball-players-balancing-consistency-and-speed-crucially.md";
  slug: "pickleball-players-balancing-consistency-and-speed-crucially";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-beware-mastering-the-tweener-shot.md": {
	id: "pickleball-players-beware-mastering-the-tweener-shot.md";
  slug: "pickleball-players-beware-mastering-the-tweener-shot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-beware-net-rules-matter.md": {
	id: "pickleball-players-beware-net-rules-matter.md";
  slug: "pickleball-players-beware-net-rules-matter";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-beware-premature-celebrations-cost-points.md": {
	id: "pickleball-players-beware-premature-celebrations-cost-points.md";
  slug: "pickleball-players-beware-premature-celebrations-cost-points";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-debate-fault-or-whiff.md": {
	id: "pickleball-players-debate-fault-or-whiff.md";
  slug: "pickleball-players-debate-fault-or-whiff";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-face-mental-battle-at-10.md": {
	id: "pickleball-players-face-mental-battle-at-10.md";
  slug: "pickleball-players-face-mental-battle-at-10";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-face-referee-fault-consequences.md": {
	id: "pickleball-players-face-referee-fault-consequences.md";
  slug: "pickleball-players-face-referee-fault-consequences";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-key-to-avoiding-court-injuries.md": {
	id: "pickleball-players-key-to-avoiding-court-injuries.md";
  slug: "pickleball-players-key-to-avoiding-court-injuries";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-master-surprise-strategy-high-lobs-dominate.md": {
	id: "pickleball-players-master-surprise-strategy-high-lobs-dominate.md";
  slug: "pickleball-players-master-surprise-strategy-high-lobs-dominate";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-master-the-chicken-wing-defense.md": {
	id: "pickleball-players-master-the-chicken-wing-defense.md";
  slug: "pickleball-players-master-the-chicken-wing-defense";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-master-the-deceptive-fake-out-shot.md": {
	id: "pickleball-players-master-the-deceptive-fake-out-shot.md";
  slug: "pickleball-players-master-the-deceptive-fake-out-shot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-mastering-patience-for-court-success.md": {
	id: "pickleball-players-mastering-patience-for-court-success.md";
  slug: "pickleball-players-mastering-patience-for-court-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-navigate-temporary-nets-rules.md": {
	id: "pickleball-players-navigate-temporary-nets-rules.md";
  slug: "pickleball-players-navigate-temporary-nets-rules";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-reframe-your-game.md": {
	id: "pickleball-players-reframe-your-game.md";
  slug: "pickleball-players-reframe-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-serve-up-aggressive-strategies.md": {
	id: "pickleball-players-serve-up-aggressive-strategies.md";
  slug: "pickleball-players-serve-up-aggressive-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-players-stay-cramp-free-with-these-tips.md": {
	id: "pickleball-players-stay-cramp-free-with-these-tips.md";
  slug: "pickleball-players-stay-cramp-free-with-these-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-popping-up-avoid-these-mistakes.md": {
	id: "pickleball-popping-up-avoid-these-mistakes.md";
  slug: "pickleball-popping-up-avoid-these-mistakes";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-power-rankings-revealed.md": {
	id: "pickleball-power-rankings-revealed.md";
  slug: "pickleball-power-rankings-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-power-struggle-battle-for-dominance-unfolds.md": {
	id: "pickleball-power-struggle-battle-for-dominance-unfolds.md";
  slug: "pickleball-power-struggle-battle-for-dominance-unfolds";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-powerhouse-team-waters-set-for-success.md": {
	id: "pickleball-powerhouse-team-waters-set-for-success.md";
  slug: "pickleball-powerhouse-team-waters-set-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-powerhouse-unleashed-malice-db-review.md": {
	id: "pickleball-powerhouse-unleashed-malice-db-review.md";
  slug: "pickleball-powerhouse-unleashed-malice-db-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-powerhouses-unite-to-revolutionize-the-game.md": {
	id: "pickleball-powerhouses-unite-to-revolutionize-the-game.md";
  slug: "pickleball-powerhouses-unite-to-revolutionize-the-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-practice-routines-elevate-your-game.md": {
	id: "pickleball-practice-routines-elevate-your-game.md";
  slug: "pickleball-practice-routines-elevate-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pro-catherine-parenteaus-unstoppable-rise.md": {
	id: "pickleball-pro-catherine-parenteaus-unstoppable-rise.md";
  slug: "pickleball-pro-catherine-parenteaus-unstoppable-rise";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pro-commits-serve-timing-foul.md": {
	id: "pickleball-pro-commits-serve-timing-foul.md";
  slug: "pickleball-pro-commits-serve-timing-foul";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pro-dekel-bars-dreamland-success-story.md": {
	id: "pickleball-pro-dekel-bars-dreamland-success-story.md";
  slug: "pickleball-pro-dekel-bars-dreamland-success-story";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pro-teams-up-to-boost-sport.md": {
	id: "pickleball-pro-teams-up-to-boost-sport.md";
  slug: "pickleball-pro-teams-up-to-boost-sport";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pro-tips-for-winning-every-match.md": {
	id: "pickleball-pro-tips-for-winning-every-match.md";
  slug: "pickleball-pro-tips-for-winning-every-match";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-prodigies-shine-at-app-la-open.md": {
	id: "pickleball-prodigies-shine-at-app-la-open.md";
  slug: "pickleball-prodigies-shine-at-app-la-open";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-prodigies-sweep-championships-in-newport-beach.md": {
	id: "pickleball-prodigies-sweep-championships-in-newport-beach.md";
  slug: "pickleball-prodigies-sweep-championships-in-newport-beach";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-prodigy-anna-leigh-waters-makes-waves.md": {
	id: "pickleball-prodigy-anna-leigh-waters-makes-waves.md";
  slug: "pickleball-prodigy-anna-leigh-waters-makes-waves";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-prodigy-anna-leigh-waters-unleashed.md": {
	id: "pickleball-prodigy-anna-leigh-waters-unleashed.md";
  slug: "pickleball-prodigy-anna-leigh-waters-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-program-revolutionizes-new-player-experience.md": {
	id: "pickleball-program-revolutionizes-new-player-experience.md";
  slug: "pickleball-program-revolutionizes-new-player-experience";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-dominate-the-app-tour-circuit.md": {
	id: "pickleball-pros-dominate-the-app-tour-circuit.md";
  slug: "pickleball-pros-dominate-the-app-tour-circuit";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-excel-despite-rain-at-tournament.md": {
	id: "pickleball-pros-excel-despite-rain-at-tournament.md";
  slug: "pickleball-pros-excel-despite-rain-at-tournament";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-paddle-drop-ruling-clarified.md": {
	id: "pickleball-pros-paddle-drop-ruling-clarified.md";
  slug: "pickleball-pros-paddle-drop-ruling-clarified";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-paddle-tap-dilemma.md": {
	id: "pickleball-pros-paddle-tap-dilemma.md";
  slug: "pickleball-pros-paddle-tap-dilemma";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-reveal-secret-to-lightning-reflexes.md": {
	id: "pickleball-pros-reveal-secret-to-lightning-reflexes.md";
  slug: "pickleball-pros-reveal-secret-to-lightning-reflexes";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-share-winning-serve-return-secrets.md": {
	id: "pickleball-pros-share-winning-serve-return-secrets.md";
  slug: "pickleball-pros-share-winning-serve-return-secrets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-pros-shine-bright-in-nyc-tournament.md": {
	id: "pickleball-pros-shine-bright-in-nyc-tournament.md";
  slug: "pickleball-pros-shine-bright-in-nyc-tournament";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-prowess-hinges-on-paddle-position.md": {
	id: "pickleball-prowess-hinges-on-paddle-position.md";
  slug: "pickleball-prowess-hinges-on-paddle-position";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-racquets-selecting-the-best-for-your-style.md": {
	id: "pickleball-racquets-selecting-the-best-for-your-style.md";
  slug: "pickleball-racquets-selecting-the-best-for-your-style";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-ratings-revolution-sparks-sports-transformation.md": {
	id: "pickleball-ratings-revolution-sparks-sports-transformation.md";
  slug: "pickleball-ratings-revolution-sparks-sports-transformation";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-renewable-energy-options-eco-friendly-courts.md": {
	id: "pickleball-renewable-energy-options-eco-friendly-courts.md";
  slug: "pickleball-renewable-energy-options-eco-friendly-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-restaurant-dining-and-playing-combined.md": {
	id: "pickleball-restaurant-dining-and-playing-combined.md";
  slug: "pickleball-restaurant-dining-and-playing-combined";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-a-beginners-guide.md": {
	id: "pickleball-rules-a-beginners-guide.md";
  slug: "pickleball-rules-a-beginners-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-avoiding-permanent-obstacles-crucial.md": {
	id: "pickleball-rules-avoiding-permanent-obstacles-crucial.md";
  slug: "pickleball-rules-avoiding-permanent-obstacles-crucial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-explained-your-complete-guide.md": {
	id: "pickleball-rules-explained-your-complete-guide.md";
  slug: "pickleball-rules-explained-your-complete-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-for-beginners-a-comprehensive-guide.md": {
	id: "pickleball-rules-for-beginners-a-comprehensive-guide.md";
  slug: "pickleball-rules-for-beginners-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-for-kids-essential-guide-for-play.md": {
	id: "pickleball-rules-for-kids-essential-guide-for-play.md";
  slug: "pickleball-rules-for-kids-essential-guide-for-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rules-the-ultimate-guide.md": {
	id: "pickleball-rules-the-ultimate-guide.md";
  slug: "pickleball-rules-the-ultimate-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-rulings-revamped-what-you-need.md": {
	id: "pickleball-rulings-revamped-what-you-need.md";
  slug: "pickleball-rulings-revamped-what-you-need";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-san-antonio-where-to-play-and-learn.md": {
	id: "pickleball-san-antonio-where-to-play-and-learn.md";
  slug: "pickleball-san-antonio-where-to-play-and-learn";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-scoring-guide-step-by-step-tutorial.md": {
	id: "pickleball-scoring-guide-step-by-step-tutorial.md";
  slug: "pickleball-scoring-guide-step-by-step-tutorial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-scoring-made-easy-a-simple-guide.md": {
	id: "pickleball-scoring-made-easy-a-simple-guide.md";
  slug: "pickleball-scoring-made-easy-a-simple-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-scoring-revolution-takes-flight.md": {
	id: "pickleball-scoring-revolution-takes-flight.md";
  slug: "pickleball-scoring-revolution-takes-flight";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-scoring-system-a-comprehensive-guide.md": {
	id: "pickleball-scoring-system-a-comprehensive-guide.md";
  slug: "pickleball-scoring-system-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-secret-revealed-play-to-win.md": {
	id: "pickleball-secret-revealed-play-to-win.md";
  slug: "pickleball-secret-revealed-play-to-win";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-secrets-to-joyful-play-revealed.md": {
	id: "pickleball-secrets-to-joyful-play-revealed.md";
  slug: "pickleball-secrets-to-joyful-play-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-serve-techniques-a-comprehensive-guide.md": {
	id: "pickleball-serve-techniques-a-comprehensive-guide.md";
  slug: "pickleball-serve-techniques-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-serving-guide-master-tips-tricks.md": {
	id: "pickleball-serving-guide-master-tips-tricks.md";
  slug: "pickleball-serving-guide-master-tips-tricks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-serving-rules-master-the-basics.md": {
	id: "pickleball-serving-rules-master-the-basics.md";
  slug: "pickleball-serving-rules-master-the-basics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-sets-the-best-options-for-every-player.md": {
	id: "pickleball-sets-the-best-options-for-every-player.md";
  slug: "pickleball-sets-the-best-options-for-every-player";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-shoe-guide-how-to-choose-the-right-pair.md": {
	id: "pickleball-shoe-guide-how-to-choose-the-right-pair.md";
  slug: "pickleball-shoe-guide-how-to-choose-the-right-pair";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-social-meetups-connect-play-today.md": {
	id: "pickleball-social-meetups-connect-play-today.md";
  slug: "pickleball-social-meetups-connect-play-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-software-tools-elevate-your-game.md": {
	id: "pickleball-software-tools-elevate-your-game.md";
  slug: "pickleball-software-tools-elevate-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-spin-shot-scores-instant-rally-victory.md": {
	id: "pickleball-spin-shot-scores-instant-rally-victory.md";
  slug: "pickleball-spin-shot-scores-instant-rally-victory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-star-achieves-triple-crown-glory.md": {
	id: "pickleball-star-achieves-triple-crown-glory.md";
  slug: "pickleball-star-achieves-triple-crown-glory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-star-ben-johns-an-inside-look.md": {
	id: "pickleball-star-ben-johns-an-inside-look.md";
  slug: "pickleball-star-ben-johns-an-inside-look";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-star-jw-johnsons-fun-filled-transformation.md": {
	id: "pickleball-star-jw-johnsons-fun-filled-transformation.md";
  slug: "pickleball-star-jw-johnsons-fun-filled-transformation";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-stars-shine-in-global-summit.md": {
	id: "pickleball-stars-shine-in-global-summit.md";
  slug: "pickleball-stars-shine-in-global-summit";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-store-finding-the-best-equipment-near-you.md": {
	id: "pickleball-store-finding-the-best-equipment-near-you.md";
  slug: "pickleball-store-finding-the-best-equipment-near-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-stores-near-me-shopping-for-the-best-gear.md": {
	id: "pickleball-stores-near-me-shopping-for-the-best-gear.md";
  slug: "pickleball-stores-near-me-shopping-for-the-best-gear";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-strategies-dominate-the-kitchen-line.md": {
	id: "pickleball-strategies-dominate-the-kitchen-line.md";
  slug: "pickleball-strategies-dominate-the-kitchen-line";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-strategy-basics-for-new-players.md": {
	id: "pickleball-strategy-basics-for-new-players.md";
  slug: "pickleball-strategy-basics-for-new-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-strategy-dominate-every-opponent.md": {
	id: "pickleball-strategy-dominate-every-opponent.md";
  slug: "pickleball-strategy-dominate-every-opponent";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-strategy-mastering-the-art-of-stacking.md": {
	id: "pickleball-strategy-mastering-the-art-of-stacking.md";
  slug: "pickleball-strategy-mastering-the-art-of-stacking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-surges-outshines-tennis-in-participation.md": {
	id: "pickleball-surges-outshines-tennis-in-participation.md";
  slug: "pickleball-surges-outshines-tennis-in-participation";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-sustainability-initiatives-my-insights.md": {
	id: "pickleball-sustainability-initiatives-my-insights.md";
  slug: "pickleball-sustainability-initiatives-my-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-sweatshirts-staying-comfortable-and-stylish.md": {
	id: "pickleball-sweatshirts-staying-comfortable-and-stylish.md";
  slug: "pickleball-sweatshirts-staying-comfortable-and-stylish";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-takes-center-stage-michelob-ultras-super-bowl-lix-commercial.md": {
	id: "pickleball-takes-center-stage-michelob-ultras-super-bowl-lix-commercial.md";
  slug: "pickleball-takes-center-stage-michelob-ultras-super-bowl-lix-commercial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tales-inspire-young-readers-to-play.md": {
	id: "pickleball-tales-inspire-young-readers-to-play.md";
  slug: "pickleball-tales-inspire-young-readers-to-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-techniques-chapter-1-how-to-hit-top-spin-in-pickleball.md": {
	id: "pickleball-techniques-chapter-1-how-to-hit-top-spin-in-pickleball.md";
  slug: "pickleball-techniques-chapter-1-how-to-hit-top-spin-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-terminology-glossary-for-new-players.md": {
	id: "pickleball-terminology-glossary-for-new-players.md";
  slug: "pickleball-terminology-glossary-for-new-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tour-eyes-formula-1-success-path.md": {
	id: "pickleball-tour-eyes-formula-1-success-path.md";
  slug: "pickleball-tour-eyes-formula-1-success-path";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tournament-guide-2025-dates-and-locations.md": {
	id: "pickleball-tournament-guide-2025-dates-and-locations.md";
  slug: "pickleball-tournament-guide-2025-dates-and-locations";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tournament-preparation-a-comprehensive-guide.md": {
	id: "pickleball-tournament-preparation-a-comprehensive-guide.md";
  slug: "pickleball-tournament-preparation-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tournament-schedule-february-july-2025.md": {
	id: "pickleball-tournament-schedule-february-july-2025.md";
  slug: "pickleball-tournament-schedule-february-july-2025";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-tournaments-near-me-how-to-compete-and-win.md": {
	id: "pickleball-tournaments-near-me-how-to-compete-and-win.md";
  slug: "pickleball-tournaments-near-me-how-to-compete-and-win";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-training-aids-a-comprehensive-guide.md": {
	id: "pickleball-training-aids-a-comprehensive-guide.md";
  slug: "pickleball-training-aids-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-training-camps-elevate-your-game.md": {
	id: "pickleball-training-camps-elevate-your-game.md";
  slug: "pickleball-training-camps-elevate-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-transition-techniques-mastering-strategies-for-success.md": {
	id: "pickleball-transition-techniques-mastering-strategies-for-success.md";
  slug: "pickleball-transition-techniques-mastering-strategies-for-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-travel-explore-and-compete-globally.md": {
	id: "pickleball-travel-explore-and-compete-globally.md";
  slug: "pickleball-travel-explore-and-compete-globally";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-uniting-communities-across-the-u-s.md": {
	id: "pickleball-uniting-communities-across-the-u-s.md";
  slug: "pickleball-uniting-communities-across-the-u-s";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-vlogging-tips-for-engaging-content.md": {
	id: "pickleball-vlogging-tips-for-engaging-content.md";
  slug: "pickleball-vlogging-tips-for-engaging-content";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-warm-up-exercises-boost-your-game.md": {
	id: "pickleball-warm-up-exercises-boost-your-game.md";
  slug: "pickleball-warm-up-exercises-boost-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-website-design-expertise-ace-your-web-presence.md": {
	id: "pickleball-website-design-expertise-ace-your-web-presence.md";
  slug: "pickleball-website-design-expertise-ace-your-web-presence";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-wellness-enhancing-your-game-healthily.md": {
	id: "pickleball-wellness-enhancing-your-game-healthily.md";
  slug: "pickleball-wellness-enhancing-your-game-healthily";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball-youtube-channels-pro-players-and-reviews.md": {
	id: "pickleball-youtube-channels-pro-players-and-reviews.md";
  slug: "pickleball-youtube-channels-pro-players-and-reviews";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleball4america-launches-ballpark-series-in-iconic-venues.md": {
	id: "pickleball4america-launches-ballpark-series-in-iconic-venues.md";
  slug: "pickleball4america-launches-ballpark-series-in-iconic-venues";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballbracketscom-the-ultimate-tournament-platform.md": {
	id: "pickleballbracketscom-the-ultimate-tournament-platform.md";
  slug: "pickleballbracketscom-the-ultimate-tournament-platform";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-explosive-rise-americas-hottest-sport-trend.md": {
	id: "pickleballs-explosive-rise-americas-hottest-sport-trend.md";
  slug: "pickleballs-explosive-rise-americas-hottest-sport-trend";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-flashy-fiasco-the-erne-shot.md": {
	id: "pickleballs-flashy-fiasco-the-erne-shot.md";
  slug: "pickleballs-flashy-fiasco-the-erne-shot";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-hidden-benefits-revealed.md": {
	id: "pickleballs-hidden-benefits-revealed.md";
  slug: "pickleballs-hidden-benefits-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-memes-a-humorous-pro-perspective.md": {
	id: "pickleballs-memes-a-humorous-pro-perspective.md";
  slug: "pickleballs-memes-a-humorous-pro-perspective";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-rise-challenges-established-racquet-sports.md": {
	id: "pickleballs-rise-challenges-established-racquet-sports.md";
  slug: "pickleballs-rise-challenges-established-racquet-sports";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-surprising-gift-gratitude-unleashed.md": {
	id: "pickleballs-surprising-gift-gratitude-unleashed.md";
  slug: "pickleballs-surprising-gift-gratitude-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pickleballs-unlikely-playing-locations-revealed.md": {
	id: "pickleballs-unlikely-playing-locations-revealed.md";
  slug: "pickleballs-unlikely-playing-locations-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"player-position-rules-revamped-in-pickleball-update.md": {
	id: "player-position-rules-revamped-in-pickleball-update.md";
  slug: "player-position-rules-revamped-in-pickleball-update";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"players-misstep-leads-to-game-controversy.md": {
	id: "players-misstep-leads-to-game-controversy.md";
  slug: "players-misstep-leads-to-game-controversy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"players-responsibility-crucial-in-pickleball-officiating.md": {
	id: "players-responsibility-crucial-in-pickleball-officiating.md";
  slug: "players-responsibility-crucial-in-pickleball-officiating";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"playing-pickleball-during-pregnancy-safe-tips.md": {
	id: "playing-pickleball-during-pregnancy-safe-tips.md";
  slug: "playing-pickleball-during-pregnancy-safe-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"playing-pickleball-in-new-york-top-locations-and-tips.md": {
	id: "playing-pickleball-in-new-york-top-locations-and-tips.md";
  slug: "playing-pickleball-in-new-york-top-locations-and-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"positivity-sparks-success-on-the-pickleball-court.md": {
	id: "positivity-sparks-success-on-the-pickleball-court.md";
  slug: "positivity-sparks-success-on-the-pickleball-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"power-vs-spin-the-ultimate-pickleball-debate.md": {
	id: "power-vs-spin-the-ultimate-pickleball-debate.md";
  slug: "power-vs-spin-the-ultimate-pickleball-debate";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"powerful-pickleball-serves-crafting-a-winning-weapon.md": {
	id: "powerful-pickleball-serves-crafting-a-winning-weapon.md";
  slug: "powerful-pickleball-serves-crafting-a-winning-weapon";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pretty-picklers-inspiring-pickleball-enthusiasts-everywhere.md": {
	id: "pretty-picklers-inspiring-pickleball-enthusiasts-everywhere.md";
  slug: "pretty-picklers-inspiring-pickleball-enthusiasts-everywhere";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"prevent-pickleball-injuries-master-your-warm-up.md": {
	id: "prevent-pickleball-injuries-master-your-warm-up.md";
  slug: "prevent-pickleball-injuries-master-your-warm-up";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"preventing-pickleball-injuries-my-top-tips-strategies.md": {
	id: "preventing-pickleball-injuries-my-top-tips-strategies.md";
  slug: "preventing-pickleball-injuries-my-top-tips-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-kennex-black-ace-pro-elite-racquet-choice.md": {
	id: "pro-kennex-black-ace-pro-elite-racquet-choice.md";
  slug: "pro-kennex-black-ace-pro-elite-racquet-choice";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-faces-turmoil-amid-organizational-clash.md": {
	id: "pro-pickleball-faces-turmoil-amid-organizational-clash.md";
  slug: "pro-pickleball-faces-turmoil-amid-organizational-clash";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-gifs-game-changing-conversational-sparks.md": {
	id: "pro-pickleball-gifs-game-changing-conversational-sparks.md";
  slug: "pro-pickleball-gifs-game-changing-conversational-sparks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-paddles-top-selections-for-competitive-play.md": {
	id: "pro-pickleball-paddles-top-selections-for-competitive-play.md";
  slug: "pro-pickleball-paddles-top-selections-for-competitive-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-players-humanizing-the-professionals.md": {
	id: "pro-pickleball-players-humanizing-the-professionals.md";
  slug: "pro-pickleball-players-humanizing-the-professionals";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-pros-reveal-footwork-secrets.md": {
	id: "pro-pickleball-pros-reveal-footwork-secrets.md";
  slug: "pro-pickleball-pros-reveal-footwork-secrets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleball-pros-shine-in-selkirk-labs-event.md": {
	id: "pro-pickleball-pros-shine-in-selkirk-labs-event.md";
  slug: "pro-pickleball-pros-shine-in-selkirk-labs-event";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleballs-rising-stars-shine-in-classic.md": {
	id: "pro-pickleballs-rising-stars-shine-in-classic.md";
  slug: "pro-pickleballs-rising-stars-shine-in-classic";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-pickleballs-thrilling-evolution-in-2022.md": {
	id: "pro-pickleballs-thrilling-evolution-in-2022.md";
  slug: "pro-pickleballs-thrilling-evolution-in-2022";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pro-players-profanity-sparks-controversy-at-tournament.md": {
	id: "pro-players-profanity-sparks-controversy-at-tournament.md";
  slug: "pro-players-profanity-sparks-controversy-at-tournament";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"professional-pickleball-growth-whats-next-2.md": {
	id: "professional-pickleball-growth-whats-next-2.md";
  slug: "professional-pickleball-growth-whats-next-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"professional-pickleball-growth-whats-next.md": {
	id: "professional-pickleball-growth-whats-next.md";
  slug: "professional-pickleball-growth-whats-next";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"professional-pickleball-paddle-what-the-pros-use.md": {
	id: "professional-pickleball-paddle-what-the-pros-use.md";
  slug: "professional-pickleball-paddle-what-the-pros-use";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"professional-pickleball-showcase-hits-iconic-ballparks.md": {
	id: "professional-pickleball-showcase-hits-iconic-ballparks.md";
  slug: "professional-pickleball-showcase-hits-iconic-ballparks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"professional-pickleball-tours-unite-in-groundbreaking-merger.md": {
	id: "professional-pickleball-tours-unite-in-groundbreaking-merger.md";
  slug: "professional-pickleball-tours-unite-in-groundbreaking-merger";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"proper-paddle-grip-vital-for-pickleball-success.md": {
	id: "proper-paddle-grip-vital-for-pickleball-success.md";
  slug: "proper-paddle-grip-vital-for-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"pros-reveal-secrets-to-pickleball-success.md": {
	id: "pros-reveal-secrets-to-pickleball-success.md";
  slug: "pros-reveal-secrets-to-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"protective-gear-in-pickleball-what-works-best.md": {
	id: "protective-gear-in-pickleball-what-works-best.md";
  slug: "protective-gear-in-pickleball-what-works-best";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"public-pickleball-courts-finding-the-best-local-spots.md": {
	id: "public-pickleball-courts-finding-the-best-local-spots.md";
  slug: "public-pickleball-courts-finding-the-best-local-spots";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"quick-drying-crucial-for-safe-pickleball-courts.md": {
	id: "quick-drying-crucial-for-safe-pickleball-courts.md";
  slug: "quick-drying-crucial-for-safe-pickleball-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"referees-decisive-role-in-pickleball-line-calls.md": {
	id: "referees-decisive-role-in-pickleball-line-calls.md";
  slug: "referees-decisive-role-in-pickleball-line-calls";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"referees-the-game-changers-in-pickleball.md": {
	id: "referees-the-game-changers-in-pickleball.md";
  slug: "referees-the-game-changers-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"revolutionize-your-game-with-defensive-lobs.md": {
	id: "revolutionize-your-game-with-defensive-lobs.md";
  slug: "revolutionize-your-game-with-defensive-lobs";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"revolutionizing-pickleball-fan-engagement-through-technology.md": {
	id: "revolutionizing-pickleball-fan-engagement-through-technology.md";
  slug: "revolutionizing-pickleball-fan-engagement-through-technology";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"rise-of-pickleball-clubs-how-to-get-involved.md": {
	id: "rise-of-pickleball-clubs-how-to-get-involved.md";
  slug: "rise-of-pickleball-clubs-how-to-get-involved";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ronbus-pickleball-paddles-unveiled-a-comprehensive-review.md": {
	id: "ronbus-pickleball-paddles-unveiled-a-comprehensive-review.md";
  slug: "ronbus-pickleball-paddles-unveiled-a-comprehensive-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ronbus-r1-pulsar-a-paddle-of-excellence.md": {
	id: "ronbus-r1-pulsar-a-paddle-of-excellence.md";
  slug: "ronbus-r1-pulsar-a-paddle-of-excellence";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ruby-paddle-unleashes-spin-and-power.md": {
	id: "ruby-paddle-unleashes-spin-and-power.md";
  slug: "ruby-paddle-unleashes-spin-and-power";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"san-diego-pickleball-courts-best-locations-and-tips.md": {
	id: "san-diego-pickleball-courts-best-locations-and-tips.md";
  slug: "san-diego-pickleball-courts-best-locations-and-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"scoring-revolution-rocks-the-court.md": {
	id: "scoring-revolution-rocks-the-court.md";
  slug: "scoring-revolution-rocks-the-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"securing-pickleball-sponsorship-deals-my-insights.md": {
	id: "securing-pickleball-sponsorship-deals-my-insights.md";
  slug: "securing-pickleball-sponsorship-deals-my-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"selkirk-labs-project-003-paddle-innovation-unveiled.md": {
	id: "selkirk-labs-project-003-paddle-innovation-unveiled.md";
  slug: "selkirk-labs-project-003-paddle-innovation-unveiled";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"selkirk-pickleball-reviewing-their-best-paddles.md": {
	id: "selkirk-pickleball-reviewing-their-best-paddles.md";
  slug: "selkirk-pickleball-reviewing-their-best-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"selkirks-vanguard-control-paddle-a-game-changer.md": {
	id: "selkirks-vanguard-control-paddle-a-game-changer.md";
  slug: "selkirks-vanguard-control-paddle-a-game-changer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"selkirks-vanguard-power-air-paddle-unleashing-power.md": {
	id: "selkirks-vanguard-power-air-paddle-unleashing-power.md";
  slug: "selkirks-vanguard-power-air-paddle-unleashing-power";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"serve-foot-position-crucial-in-tennis-matches.md": {
	id: "serve-foot-position-crucial-in-tennis-matches.md";
  slug: "serve-foot-position-crucial-in-tennis-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"serve-speeding-strategies-for-recreational-and-tournaments.md": {
	id: "serve-speeding-strategies-for-recreational-and-tournaments.md";
  slug: "serve-speeding-strategies-for-recreational-and-tournaments";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"serve-strategy-shifts-spark-controversy-in-pickleball.md": {
	id: "serve-strategy-shifts-spark-controversy-in-pickleball.md";
  slug: "serve-strategy-shifts-spark-controversy-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"serve-up-success-master-pickleball-foot-placement.md": {
	id: "serve-up-success-master-pickleball-foot-placement.md";
  slug: "serve-up-success-master-pickleball-foot-placement";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"serve-your-way-to-victory-in-pickleball.md": {
	id: "serve-your-way-to-victory-in-pickleball.md";
  slug: "serve-your-way-to-victory-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"shadow-play-mastering-pickleball-court-challenges.md": {
	id: "shadow-play-mastering-pickleball-court-challenges.md";
  slug: "shadow-play-mastering-pickleball-court-challenges";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"sharpen-your-mind-with-pickleball-puzzle-fun.md": {
	id: "sharpen-your-mind-with-pickleball-puzzle-fun.md";
  slug: "sharpen-your-mind-with-pickleball-puzzle-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"shedding-bad-pickleball-habits-a-winning-transition.md": {
	id: "shedding-bad-pickleball-habits-a-winning-transition.md";
  slug: "shedding-bad-pickleball-habits-a-winning-transition";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"sidearm-serve-a-game-changer-in-pickleball.md": {
	id: "sidearm-serve-a-game-changer-in-pickleball.md";
  slug: "sidearm-serve-a-game-changer-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"silencing-pickleball-noise-for-community-harmony.md": {
	id: "silencing-pickleball-noise-for-community-harmony.md";
  slug: "silencing-pickleball-noise-for-community-harmony";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"six-zero-double-black-diamond-ski-experience.md": {
	id: "six-zero-double-black-diamond-ski-experience.md";
  slug: "six-zero-double-black-diamond-ski-experience";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"slow-down-for-pickleball-success.md": {
	id: "slow-down-for-pickleball-success.md";
  slug: "slow-down-for-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"smart-pickleball-pricing-strategies-decoded.md": {
	id: "smart-pickleball-pricing-strategies-decoded.md";
  slug: "smart-pickleball-pricing-strategies-decoded";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"social-impact-of-pickleball-on-seniors-retirees.md": {
	id: "social-impact-of-pickleball-on-seniors-retirees.md";
  slug: "social-impact-of-pickleball-on-seniors-retirees";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"social-side-of-pickleball-new-friends-fun.md": {
	id: "social-side-of-pickleball-new-friends-fun.md";
  slug: "social-side-of-pickleball-new-friends-fun";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"speed-strategies-creating-chaos-on-pickleball-court.md": {
	id: "speed-strategies-creating-chaos-on-pickleball-court.md";
  slug: "speed-strategies-creating-chaos-on-pickleball-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"speed-up-your-pickleball-game-with-these-tips.md": {
	id: "speed-up-your-pickleball-game-with-these-tips.md";
  slug: "speed-up-your-pickleball-game-with-these-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"spin-doctor-unlock-pickleball-success.md": {
	id: "spin-doctor-unlock-pickleball-success.md";
  slug: "spin-doctor-unlock-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"spin-serve-debate-future-ruling-uncertain.md": {
	id: "spin-serve-debate-future-ruling-uncertain.md";
  slug: "spin-serve-debate-future-ruling-uncertain";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"spin-your-losses-into-wins.md": {
	id: "spin-your-losses-into-wins.md";
  slug: "spin-your-losses-into-wins";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"squash-sport-an-in-depth-guide.md": {
	id: "squash-sport-an-in-depth-guide.md";
  slug: "squash-sport-an-in-depth-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"star-athletes-embrace-pickleball-crossover-trend.md": {
	id: "star-athletes-embrace-pickleball-crossover-trend.md";
  slug: "star-athletes-embrace-pickleball-crossover-trend";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"stars-on-the-court-celebrities-playing-pickleball.md": {
	id: "stars-on-the-court-celebrities-playing-pickleball.md";
  slug: "stars-on-the-court-celebrities-playing-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"stay-alert-pickleballs-unpredictable-returns.md": {
	id: "stay-alert-pickleballs-unpredictable-returns.md";
  slug: "stay-alert-pickleballs-unpredictable-returns";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-backing-elevating-your-return-game.md": {
	id: "strategic-backing-elevating-your-return-game.md";
  slug: "strategic-backing-elevating-your-return-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-moves-mastering-court-positioning-in-pickleball.md": {
	id: "strategic-moves-mastering-court-positioning-in-pickleball.md";
  slug: "strategic-moves-mastering-court-positioning-in-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-risk-taking-in-pickleball-master-the-game.md": {
	id: "strategic-risk-taking-in-pickleball-master-the-game.md";
  slug: "strategic-risk-taking-in-pickleball-master-the-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-secrets-to-dominate-pickleball-matches.md": {
	id: "strategic-secrets-to-dominate-pickleball-matches.md";
  slug: "strategic-secrets-to-dominate-pickleball-matches";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-time-outs-game-changer.md": {
	id: "strategic-time-outs-game-changer.md";
  slug: "strategic-time-outs-game-changer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategic-unity-in-pickleball-crucial.md": {
	id: "strategic-unity-in-pickleball-crucial.md";
  slug: "strategic-unity-in-pickleball-crucial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategies-to-outsmart-pickleball-lobbers.md": {
	id: "strategies-to-outsmart-pickleball-lobbers.md";
  slug: "strategies-to-outsmart-pickleball-lobbers";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategies-to-outsmart-stacking-pickleball-doubles-teams.md": {
	id: "strategies-to-outsmart-stacking-pickleball-doubles-teams.md";
  slug: "strategies-to-outsmart-stacking-pickleball-doubles-teams";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategies-unveiled-for-dominating-pickleball-court.md": {
	id: "strategies-unveiled-for-dominating-pickleball-court.md";
  slug: "strategies-unveiled-for-dominating-pickleball-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategize-lobs-to-disrupt-opponents-backhands.md": {
	id: "strategize-lobs-to-disrupt-opponents-backhands.md";
  slug: "strategize-lobs-to-disrupt-opponents-backhands";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"strategize-your-pickleball-match-up-for-victory.md": {
	id: "strategize-your-pickleball-match-up-for-victory.md";
  slug: "strategize-your-pickleball-match-up-for-victory";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"surprise-victors-emerge-in-ppa-orange-county.md": {
	id: "surprise-victors-emerge-in-ppa-orange-county.md";
  slug: "surprise-victors-emerge-in-ppa-orange-county";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"surprising-lob-response-in-pickleball-strategy.md": {
	id: "surprising-lob-response-in-pickleball-strategy.md";
  slug: "surprising-lob-response-in-pickleball-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"swift-line-calls-ensure-fair-tennis-play.md": {
	id: "swift-line-calls-ensure-fair-tennis-play.md";
  slug: "swift-line-calls-ensure-fair-tennis-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"synchronize-moves-for-pickleball-success.md": {
	id: "synchronize-moves-for-pickleball-success.md";
  slug: "synchronize-moves-for-pickleball-success";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"team-waters-triumphs-in-ppa-orlando-cup.md": {
	id: "team-waters-triumphs-in-ppa-orlando-cup.md";
  slug: "team-waters-triumphs-in-ppa-orlando-cup";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"teamwork-strategies-for-dominating-the-pickleball-court.md": {
	id: "teamwork-strategies-for-dominating-the-pickleball-court.md";
  slug: "teamwork-strategies-for-dominating-the-pickleball-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"teen-stars-dominate-pickleball-championships-coast-to-coast.md": {
	id: "teen-stars-dominate-pickleball-championships-coast-to-coast.md";
  slug: "teen-stars-dominate-pickleball-championships-coast-to-coast";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"teenage-pickleball-prodigy-dominates-ppa-championships.md": {
	id: "teenage-pickleball-prodigy-dominates-ppa-championships.md";
  slug: "teenage-pickleball-prodigy-dominates-ppa-championships";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"teenage-pickleball-pros-emotional-tournament-journey.md": {
	id: "teenage-pickleball-pros-emotional-tournament-journey.md";
  slug: "teenage-pickleball-pros-emotional-tournament-journey";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"tennis-court-dimensions-everything-you-need-to-know.md": {
	id: "tennis-court-dimensions-everything-you-need-to-know.md";
  slug: "tennis-court-dimensions-everything-you-need-to-know";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-best-luxury-pickleball-bags-for-fashionable-women-players.md": {
	id: "the-best-luxury-pickleball-bags-for-fashionable-women-players.md";
  slug: "the-best-luxury-pickleball-bags-for-fashionable-women-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-best-pickleball-bags-for-every-player-type.md": {
	id: "the-best-pickleball-bags-for-every-player-type.md";
  slug: "the-best-pickleball-bags-for-every-player-type";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-best-pickleball-balls-for-all-skill-levels.md": {
	id: "the-best-pickleball-balls-for-all-skill-levels.md";
  slug: "the-best-pickleball-balls-for-all-skill-levels";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-best-pickleball-subscription-services-reviewed.md": {
	id: "the-best-pickleball-subscription-services-reviewed.md";
  slug: "the-best-pickleball-subscription-services-reviewed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-comprehensive-review-of-the-years-top-pickleball-paddles.md": {
	id: "the-comprehensive-review-of-the-years-top-pickleball-paddles.md";
  slug: "the-comprehensive-review-of-the-years-top-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-evolution-of-pickleball-equipment-a-look-back-and-ahead.md": {
	id: "the-evolution-of-pickleball-equipment-a-look-back-and-ahead.md";
  slug: "the-evolution-of-pickleball-equipment-a-look-back-and-ahead";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-slice-pickleball-power-paddles-unleashed.md": {
	id: "the-slice-pickleball-power-paddles-unleashed.md";
  slug: "the-slice-pickleball-power-paddles-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-carbon-fiber-pickleball-paddle-roundup.md": {
	id: "the-ultimate-carbon-fiber-pickleball-paddle-roundup.md";
  slug: "the-ultimate-carbon-fiber-pickleball-paddle-roundup";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-choosing-the-best-pickleball-paddle.md": {
	id: "the-ultimate-guide-to-choosing-the-best-pickleball-paddle.md";
  slug: "the-ultimate-guide-to-choosing-the-best-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-crbn-pickleball-paddles-2.md": {
	id: "the-ultimate-guide-to-crbn-pickleball-paddles-2.md";
  slug: "the-ultimate-guide-to-crbn-pickleball-paddles-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-crbn-pickleball-paddles-3.md": {
	id: "the-ultimate-guide-to-crbn-pickleball-paddles-3.md";
  slug: "the-ultimate-guide-to-crbn-pickleball-paddles-3";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-crbn-pickleball-paddles-4.md": {
	id: "the-ultimate-guide-to-crbn-pickleball-paddles-4.md";
  slug: "the-ultimate-guide-to-crbn-pickleball-paddles-4";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-crbn-pickleball-paddles-5.md": {
	id: "the-ultimate-guide-to-crbn-pickleball-paddles-5.md";
  slug: "the-ultimate-guide-to-crbn-pickleball-paddles-5";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-crbn-pickleball-paddles.md": {
	id: "the-ultimate-guide-to-crbn-pickleball-paddles.md";
  slug: "the-ultimate-guide-to-crbn-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-customizing-your-pickleball-paddle.md": {
	id: "the-ultimate-guide-to-customizing-your-pickleball-paddle.md";
  slug: "the-ultimate-guide-to-customizing-your-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-engage-pickleball-paddles-and-camps.md": {
	id: "the-ultimate-guide-to-engage-pickleball-paddles-and-camps.md";
  slug: "the-ultimate-guide-to-engage-pickleball-paddles-and-camps";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-engage-pickleball-paddles-camps.md": {
	id: "the-ultimate-guide-to-engage-pickleball-paddles-camps.md";
  slug: "the-ultimate-guide-to-engage-pickleball-paddles-camps";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-engage-pickleball-paddles.md": {
	id: "the-ultimate-guide-to-engage-pickleball-paddles.md";
  slug: "the-ultimate-guide-to-engage-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-friday-pickleball-paddles.md": {
	id: "the-ultimate-guide-to-friday-pickleball-paddles.md";
  slug: "the-ultimate-guide-to-friday-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-mens-pickleball-apparel.md": {
	id: "the-ultimate-guide-to-mens-pickleball-apparel.md";
  slug: "the-ultimate-guide-to-mens-pickleball-apparel";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-apparel-what-to-wear-on-the-court.md": {
	id: "the-ultimate-guide-to-pickleball-apparel-what-to-wear-on-the-court.md";
  slug: "the-ultimate-guide-to-pickleball-apparel-what-to-wear-on-the-court";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-at-the-pickleball-club-of-carlsbad.md": {
	id: "the-ultimate-guide-to-pickleball-at-the-pickleball-club-of-carlsbad.md";
  slug: "the-ultimate-guide-to-pickleball-at-the-pickleball-club-of-carlsbad";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-court-accessories-and-gear.md": {
	id: "the-ultimate-guide-to-pickleball-court-accessories-and-gear.md";
  slug: "the-ultimate-guide-to-pickleball-court-accessories-and-gear";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-court-dimensions.md": {
	id: "the-ultimate-guide-to-pickleball-court-dimensions.md";
  slug: "the-ultimate-guide-to-pickleball-court-dimensions";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-in-carlsbad.md": {
	id: "the-ultimate-guide-to-pickleball-in-carlsbad.md";
  slug: "the-ultimate-guide-to-pickleball-in-carlsbad";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-leagues.md": {
	id: "the-ultimate-guide-to-pickleball-leagues.md";
  slug: "the-ultimate-guide-to-pickleball-leagues";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-paddle-care.md": {
	id: "the-ultimate-guide-to-pickleball-paddle-care.md";
  slug: "the-ultimate-guide-to-pickleball-paddle-care";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-paddles-for-spin-2.md": {
	id: "the-ultimate-guide-to-pickleball-paddles-for-spin-2.md";
  slug: "the-ultimate-guide-to-pickleball-paddles-for-spin-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-paddles-for-spin.md": {
	id: "the-ultimate-guide-to-pickleball-paddles-for-spin.md";
  slug: "the-ultimate-guide-to-pickleball-paddles-for-spin";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-shoes-in-2024.md": {
	id: "the-ultimate-guide-to-pickleball-shoes-in-2024.md";
  slug: "the-ultimate-guide-to-pickleball-shoes-in-2024";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-pickleball-tips-tricks-and-essentials.md": {
	id: "the-ultimate-guide-to-pickleball-tips-tricks-and-essentials.md";
  slug: "the-ultimate-guide-to-pickleball-tips-tricks-and-essentials";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-the-crbn-4th-gen-pickleball-paddle.md": {
	id: "the-ultimate-guide-to-the-crbn-4th-gen-pickleball-paddle.md";
  slug: "the-ultimate-guide-to-the-crbn-4th-gen-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-usa-pickleball-2.md": {
	id: "the-ultimate-guide-to-usa-pickleball-2.md";
  slug: "the-ultimate-guide-to-usa-pickleball-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-usa-pickleball-3.md": {
	id: "the-ultimate-guide-to-usa-pickleball-3.md";
  slug: "the-ultimate-guide-to-usa-pickleball-3";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-guide-to-usa-pickleball.md": {
	id: "the-ultimate-guide-to-usa-pickleball.md";
  slug: "the-ultimate-guide-to-usa-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-pickleball-ball-guide.md": {
	id: "the-ultimate-pickleball-ball-guide.md";
  slug: "the-ultimate-pickleball-ball-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-pickleball-guide.md": {
	id: "the-ultimate-pickleball-guide.md";
  slug: "the-ultimate-pickleball-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-pickleball-paddle-review-guide.md": {
	id: "the-ultimate-pickleball-paddle-review-guide.md";
  slug: "the-ultimate-pickleball-paddle-review-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-pickleball-warm-up-guide.md": {
	id: "the-ultimate-pickleball-warm-up-guide.md";
  slug: "the-ultimate-pickleball-warm-up-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultimate-review-of-the-friday-pickleball-paddle.md": {
	id: "the-ultimate-review-of-the-friday-pickleball-paddle.md";
  slug: "the-ultimate-review-of-the-friday-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-ultra-hustle-a-deep-dive-into-the-michelob-ultra-pickleball-super-bowl-commercial.md": {
	id: "the-ultra-hustle-a-deep-dive-into-the-michelob-ultra-pickleball-super-bowl-commercial.md";
  slug: "the-ultra-hustle-a-deep-dive-into-the-michelob-ultra-pickleball-super-bowl-commercial";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-years-top-rated-pickleball-shoes-find-your-perfect-match-2.md": {
	id: "the-years-top-rated-pickleball-shoes-find-your-perfect-match-2.md";
  slug: "the-years-top-rated-pickleball-shoes-find-your-perfect-match-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-years-top-rated-pickleball-shoes-find-your-perfect-match.md": {
	id: "the-years-top-rated-pickleball-shoes-find-your-perfect-match.md";
  slug: "the-years-top-rated-pickleball-shoes-find-your-perfect-match";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"third-shot-drop-its-not-the-whole-story.md": {
	id: "third-shot-drop-its-not-the-whole-story.md";
  slug: "third-shot-drop-its-not-the-whole-story";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"thrilling-matches-and-upsets-at-atlanta-open.md": {
	id: "thrilling-matches-and-upsets-at-atlanta-open.md";
  slug: "thrilling-matches-and-upsets-at-atlanta-open";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"time-to-replace-your-dead-pickleball-paddle.md": {
	id: "time-to-replace-your-dead-pickleball-paddle.md";
  slug: "time-to-replace-your-dead-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"timely-line-calls-key-to-fair-play.md": {
	id: "timely-line-calls-key-to-fair-play.md";
  slug: "timely-line-calls-key-to-fair-play";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-10-best-budget-pickleball-paddles-for-2024.md": {
	id: "top-10-best-budget-pickleball-paddles-for-2024.md";
  slug: "top-10-best-budget-pickleball-paddles-for-2024";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-2024-carbon-fiber-pickleball-paddles.md": {
	id: "top-2024-carbon-fiber-pickleball-paddles.md";
  slug: "top-2024-carbon-fiber-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-4-high-tech-carbon-fiber-pickleball-paddles.md": {
	id: "top-4-high-tech-carbon-fiber-pickleball-paddles.md";
  slug: "top-4-high-tech-carbon-fiber-pickleball-paddles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-5-pickleball-players-who-dominated-2023.md": {
	id: "top-5-pickleball-players-who-dominated-2023.md";
  slug: "top-5-pickleball-players-who-dominated-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-beginner-pickleball-paddles-2023-edition.md": {
	id: "top-beginner-pickleball-paddles-2023-edition.md";
  slug: "top-beginner-pickleball-paddles-2023-edition";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-carbon-fiber-pickleball-paddles-2024-selkirk-vatic-pro-xs-xspak.md": {
	id: "top-carbon-fiber-pickleball-paddles-2024-selkirk-vatic-pro-xs-xspak.md";
  slug: "top-carbon-fiber-pickleball-paddles-2024-selkirk-vatic-pro-xs-xspak";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-carbon-fiber-pickleball-paddles-premium-sets-for-all-skill-levels.md": {
	id: "top-carbon-fiber-pickleball-paddles-premium-sets-for-all-skill-levels.md";
  slug: "top-carbon-fiber-pickleball-paddles-premium-sets-for-all-skill-levels";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-carbon-fiber-pickleball-paddles-roundup.md": {
	id: "top-carbon-fiber-pickleball-paddles-roundup.md";
  slug: "top-carbon-fiber-pickleball-paddles-roundup";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-funny-pickleball-t-shirts-for-men-and-women.md": {
	id: "top-funny-pickleball-t-shirts-for-men-and-women.md";
  slug: "top-funny-pickleball-t-shirts-for-men-and-women";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-innovative-pickleball-accessories-for-your-game.md": {
	id: "top-innovative-pickleball-accessories-for-your-game.md";
  slug: "top-innovative-pickleball-accessories-for-your-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-innovative-pickleball-equipment-of-2023.md": {
	id: "top-innovative-pickleball-equipment-of-2023.md";
  slug: "top-innovative-pickleball-equipment-of-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-outdoor-pickleball-nets-of-the-year-rated.md": {
	id: "top-outdoor-pickleball-nets-of-the-year-rated.md";
  slug: "top-outdoor-pickleball-nets-of-the-year-rated";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-app-reviews-my-expert-insights.md": {
	id: "top-pickleball-app-reviews-my-expert-insights.md";
  slug: "top-pickleball-app-reviews-my-expert-insights";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-bags-reviewed-find-your-favorite.md": {
	id: "top-pickleball-bags-reviewed-find-your-favorite.md";
  slug: "top-pickleball-bags-reviewed-find-your-favorite";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-balls-elevate-tournaments-and-drills.md": {
	id: "top-pickleball-balls-elevate-tournaments-and-drills.md";
  slug: "top-pickleball-balls-elevate-tournaments-and-drills";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-balls-onix-franklin-sports-niupipo.md": {
	id: "top-pickleball-balls-onix-franklin-sports-niupipo.md";
  slug: "top-pickleball-balls-onix-franklin-sports-niupipo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-courts-in-the-usa-ranked-definitively.md": {
	id: "top-pickleball-courts-in-the-usa-ranked-definitively.md";
  slug: "top-pickleball-courts-in-the-usa-ranked-definitively";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-gear-must-haves-for-serious-players.md": {
	id: "top-pickleball-gear-must-haves-for-serious-players.md";
  slug: "top-pickleball-gear-must-haves-for-serious-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-hat-roundup-caps-for-men-women.md": {
	id: "top-pickleball-hat-roundup-caps-for-men-women.md";
  slug: "top-pickleball-hat-roundup-caps-for-men-women";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-hats-for-sun-protection-style.md": {
	id: "top-pickleball-hats-for-sun-protection-style.md";
  slug: "top-pickleball-hats-for-sun-protection-style";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-overgrips-joola-gamma-sports-and-more.md": {
	id: "top-pickleball-overgrips-joola-gamma-sports-and-more.md";
  slug: "top-pickleball-overgrips-joola-gamma-sports-and-more";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-paddle-brands-ranked-a-comprehensive-guide.md": {
	id: "top-pickleball-paddle-brands-ranked-a-comprehensive-guide.md";
  slug: "top-pickleball-paddle-brands-ranked-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-paddle-reviews-for-players.md": {
	id: "top-pickleball-paddle-reviews-for-players.md";
  slug: "top-pickleball-paddle-reviews-for-players";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-paddles-2023-best-picks-for-you.md": {
	id: "top-pickleball-paddles-2023-best-picks-for-you.md";
  slug: "top-pickleball-paddles-2023-best-picks-for-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-paddles-how-to-choose-the-right-one-for-you.md": {
	id: "top-pickleball-paddles-how-to-choose-the-right-one-for-you.md";
  slug: "top-pickleball-paddles-how-to-choose-the-right-one-for-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-paddles-ultimate-guide-reviews.md": {
	id: "top-pickleball-paddles-ultimate-guide-reviews.md";
  slug: "top-pickleball-paddles-ultimate-guide-reviews";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-podcasts-a-must-listen-lineup.md": {
	id: "top-pickleball-podcasts-a-must-listen-lineup.md";
  slug: "top-pickleball-podcasts-a-must-listen-lineup";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-podcasts-for-players-fans.md": {
	id: "top-pickleball-podcasts-for-players-fans.md";
  slug: "top-pickleball-podcasts-for-players-fans";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-products-bags-paddles-balls-accessories.md": {
	id: "top-pickleball-products-bags-paddles-balls-accessories.md";
  slug: "top-pickleball-products-bags-paddles-balls-accessories";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-rallies-unforgettable-court-moments.md": {
	id: "top-pickleball-rallies-unforgettable-court-moments.md";
  slug: "top-pickleball-rallies-unforgettable-court-moments";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-shoes-for-men-skechers-wilson-k-swiss.md": {
	id: "top-pickleball-shoes-for-men-skechers-wilson-k-swiss.md";
  slug: "top-pickleball-shoes-for-men-skechers-wilson-k-swiss";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-shoes-for-peak-court-performance.md": {
	id: "top-pickleball-shoes-for-peak-court-performance.md";
  slug: "top-pickleball-shoes-for-peak-court-performance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-pickleball-vacation-destinations-revealed.md": {
	id: "top-pickleball-vacation-destinations-revealed.md";
  slug: "top-pickleball-vacation-destinations-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-seasonal-must-have-pickleball-apparel-picks.md": {
	id: "top-seasonal-must-have-pickleball-apparel-picks.md";
  slug: "top-seasonal-must-have-pickleball-apparel-picks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-spin-performance-volair-mach-2-forza.md": {
	id: "top-spin-performance-volair-mach-2-forza.md";
  slug: "top-spin-performance-volair-mach-2-forza";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"top-wristbands-for-sports-enthusiasts.md": {
	id: "top-wristbands-for-sports-enthusiasts.md";
  slug: "top-wristbands-for-sports-enthusiasts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"trelleco-a-game-changer-in-pickleball-fashion.md": {
	id: "trelleco-a-game-changer-in-pickleball-fashion.md";
  slug: "trelleco-a-game-changer-in-pickleball-fashion";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"turning-pickleball-defense-into-offensive-strategy.md": {
	id: "turning-pickleball-defense-into-offensive-strategy.md";
  slug: "turning-pickleball-defense-into-offensive-strategy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-comfort-style-mangrove-pickleball-backpack-review.md": {
	id: "ultimate-comfort-style-mangrove-pickleball-backpack-review.md";
  slug: "ultimate-comfort-style-mangrove-pickleball-backpack-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-guide-pickleball-bags-choose-right.md": {
	id: "ultimate-guide-pickleball-bags-choose-right.md";
  slug: "ultimate-guide-pickleball-bags-choose-right";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-guide-to-choosing-the-right-pickleball-paddle.md": {
	id: "ultimate-guide-to-choosing-the-right-pickleball-paddle.md";
  slug: "ultimate-guide-to-choosing-the-right-pickleball-paddle";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-pickleball-bag-roundup-featuring-top-brands.md": {
	id: "ultimate-pickleball-bag-roundup-featuring-top-brands.md";
  slug: "ultimate-pickleball-bag-roundup-featuring-top-brands";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-pickleball-gear-guide-experts-top-picks-2.md": {
	id: "ultimate-pickleball-gear-guide-experts-top-picks-2.md";
  slug: "ultimate-pickleball-gear-guide-experts-top-picks-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-pickleball-gear-guide-experts-top-picks.md": {
	id: "ultimate-pickleball-gear-guide-experts-top-picks.md";
  slug: "ultimate-pickleball-gear-guide-experts-top-picks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-pickleball-gift-guide-for-enthusiasts.md": {
	id: "ultimate-pickleball-gift-guide-for-enthusiasts.md";
  slug: "ultimate-pickleball-gift-guide-for-enthusiasts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ultimate-power-control-2024-selkirk-pickleball-paddle-roundup.md": {
	id: "ultimate-power-control-2024-selkirk-pickleball-paddle-roundup.md";
  slug: "ultimate-power-control-2024-selkirk-pickleball-paddle-roundup";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unaware-pickleball-rules-you-might-be-breaking.md": {
	id: "unaware-pickleball-rules-you-might-be-breaking.md";
  slug: "unaware-pickleball-rules-you-might-be-breaking";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"uncover-opponents-handedness-for-winning-strategies.md": {
	id: "uncover-opponents-handedness-for-winning-strategies.md";
  slug: "uncover-opponents-handedness-for-winning-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-core-thickness-in-materials.md": {
	id: "understanding-core-thickness-in-materials.md";
  slug: "understanding-core-thickness-in-materials";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-pickleball-a-complete-guide-from-rules-to-scoring.md": {
	id: "understanding-pickleball-a-complete-guide-from-rules-to-scoring.md";
  slug: "understanding-pickleball-a-complete-guide-from-rules-to-scoring";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-pickleball-customer-profiles-demographics.md": {
	id: "understanding-pickleball-customer-profiles-demographics.md";
  slug: "understanding-pickleball-customer-profiles-demographics";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-pickleball-game-psychology-depths.md": {
	id: "understanding-pickleball-game-psychology-depths.md";
  slug: "understanding-pickleball-game-psychology-depths";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-pickleball-referee-guidelines-fully.md": {
	id: "understanding-pickleball-referee-guidelines-fully.md";
  slug: "understanding-pickleball-referee-guidelines-fully";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"understanding-the-pickleball-court-lines-zones.md": {
	id: "understanding-the-pickleball-court-lines-zones.md";
  slug: "understanding-the-pickleball-court-lines-zones";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unlock-pickleball-sales-promotions-deals-now.md": {
	id: "unlock-pickleball-sales-promotions-deals-now.md";
  slug: "unlock-pickleball-sales-promotions-deals-now";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unpredictable-court-movements-unsettle-pickleball-opponents.md": {
	id: "unpredictable-court-movements-unsettle-pickleball-opponents.md";
  slug: "unpredictable-court-movements-unsettle-pickleball-opponents";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unveiling-the-gearbox-cx14e-the-ultimate-power-paddle-review.md": {
	id: "unveiling-the-gearbox-cx14e-the-ultimate-power-paddle-review.md";
  slug: "unveiling-the-gearbox-cx14e-the-ultimate-power-paddle-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unveiling-the-health-benefits-of-playing-pickleball.md": {
	id: "unveiling-the-health-benefits-of-playing-pickleball.md";
  slug: "unveiling-the-health-benefits-of-playing-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unyielding-players-dominate-pickleball-court-battles.md": {
	id: "unyielding-players-dominate-pickleball-court-battles.md";
  slug: "unyielding-players-dominate-pickleball-court-battles";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"us-open-pickleball-championships-shaping-sports-future.md": {
	id: "us-open-pickleball-championships-shaping-sports-future.md";
  slug: "us-open-pickleball-championships-shaping-sports-future";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"usapa-pickleball-rules-rankings-and-more.md": {
	id: "usapa-pickleball-rules-rankings-and-more.md";
  slug: "usapa-pickleball-rules-rankings-and-more";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"varied-speeds-in-pickleball-the-winning-secret.md": {
	id: "varied-speeds-in-pickleball-the-winning-secret.md";
  slug: "varied-speeds-in-pickleball-the-winning-secret";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vatic-pro-alchemy-transform-your-business-today.md": {
	id: "vatic-pro-alchemy-transform-your-business-today.md";
  slug: "vatic-pro-alchemy-transform-your-business-today";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vatic-pro-flash-elite-paddle-performance-unleashed.md": {
	id: "vatic-pro-flash-elite-paddle-performance-unleashed.md";
  slug: "vatic-pro-flash-elite-paddle-performance-unleashed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vatic-pro-prism-flash-a-detailed-overview.md": {
	id: "vatic-pro-prism-flash-a-detailed-overview.md";
  slug: "vatic-pro-prism-flash-a-detailed-overview";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vibe-pickleball-league-sparks-pro-sports-buzz.md": {
	id: "vibe-pickleball-league-sparks-pro-sports-buzz.md";
  slug: "vibe-pickleball-league-sparks-pro-sports-buzz";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"volair-mach-1-discover-high-speed-flight-comfort.md": {
	id: "volair-mach-1-discover-high-speed-flight-comfort.md";
  slug: "volair-mach-1-discover-high-speed-flight-comfort";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"volley-dink-secrets-revealed.md": {
	id: "volley-dink-secrets-revealed.md";
  slug: "volley-dink-secrets-revealed";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"what-beginner-pickleball-players-need-to-stop-doing-to-start-winning.md": {
	id: "what-beginner-pickleball-players-need-to-stop-doing-to-start-winning.md";
  slug: "what-beginner-pickleball-players-need-to-stop-doing-to-start-winning";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"where-can-i-play-pickleball-near-me-a-comprehensive-guide.md": {
	id: "where-can-i-play-pickleball-near-me-a-comprehensive-guide.md";
  slug: "where-can-i-play-pickleball-near-me-a-comprehensive-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"where-to-buy-pickleball-paddles-the-best-stores-and-online-options.md": {
	id: "where-to-buy-pickleball-paddles-the-best-stores-and-online-options.md";
  slug: "where-to-buy-pickleball-paddles-the-best-stores-and-online-options";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"where-to-play-pickleball-near-me-the-best-local-courts.md": {
	id: "where-to-play-pickleball-near-me-the-best-local-courts.md";
  slug: "where-to-play-pickleball-near-me-the-best-local-courts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"who-invented-pickleball-the-story-behind-the-game.md": {
	id: "who-invented-pickleball-the-story-behind-the-game.md";
  slug: "who-invented-pickleball-the-story-behind-the-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"winning-pickleball-doubles-strategy-tips-tricks.md": {
	id: "winning-pickleball-doubles-strategy-tips-tricks.md";
  slug: "winning-pickleball-doubles-strategy-tips-tricks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"winning-pickleball-matches-top-mental-strategies.md": {
	id: "winning-pickleball-matches-top-mental-strategies.md";
  slug: "winning-pickleball-matches-top-mental-strategies";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"winning-pickleball-points-target-strategies-unveiled.md": {
	id: "winning-pickleball-points-target-strategies-unveiled.md";
  slug: "winning-pickleball-points-target-strategies-unveiled";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"winning-plays-advanced-pickleball-strategies-guide.md": {
	id: "winning-plays-advanced-pickleball-strategies-guide.md";
  slug: "winning-plays-advanced-pickleball-strategies-guide";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"winning-strategies-pickleball-singles-tips.md": {
	id: "winning-strategies-pickleball-singles-tips.md";
  slug: "winning-strategies-pickleball-singles-tips";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"witness-the-thrills-of-pro-pickleball.md": {
	id: "witness-the-thrills-of-pro-pickleball.md";
  slug: "witness-the-thrills-of-pro-pickleball";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"your-guide-to-atlanta-pickleball-center.md": {
	id: "your-guide-to-atlanta-pickleball-center.md";
  slug: "your-guide-to-atlanta-pickleball-center";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"your-ultimate-guide-to-atlanta-pickleball-center.md": {
	id: "your-ultimate-guide-to-atlanta-pickleball-center.md";
  slug: "your-ultimate-guide-to-atlanta-pickleball-center";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"your-ultimate-guide-to-pickleball-clinics-near-you.md": {
	id: "your-ultimate-guide-to-pickleball-clinics-near-you.md";
  slug: "your-ultimate-guide-to-pickleball-clinics-near-you";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"your-ultimate-guide-to-pickleball-courts-in-and-around-jamestown.md": {
	id: "your-ultimate-guide-to-pickleball-courts-in-and-around-jamestown.md";
  slug: "your-ultimate-guide-to-pickleball-courts-in-and-around-jamestown";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"youth-pickleball-alliance-champions-community-connection.md": {
	id: "youth-pickleball-alliance-champions-community-connection.md";
  slug: "youth-pickleball-alliance-champions-community-connection";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"z5-pickleball-paddles-reviews-and-recommendations.md": {
	id: "z5-pickleball-paddles-reviews-and-recommendations.md";
  slug: "z5-pickleball-paddles-reviews-and-recommendations";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"zane-navratil-signature-pickleball-paddle-deals.md": {
	id: "zane-navratil-signature-pickleball-paddle-deals.md";
  slug: "zane-navratil-signature-pickleball-paddle-deals";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
