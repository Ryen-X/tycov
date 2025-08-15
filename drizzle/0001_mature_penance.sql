CREATE TABLE "personal_stats" (
	"ip_address" varchar PRIMARY KEY NOT NULL,
	"correct_guesses" bigint DEFAULT 0 NOT NULL,
	"incorrect_guesses" bigint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_sessions" (
	"ip_address" varchar PRIMARY KEY NOT NULL,
	"current_image" varchar,
	"last_activity" timestamp DEFAULT now()
);
