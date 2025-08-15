CREATE TABLE "responses" (
	"response_id" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	"user_session" varchar NOT NULL,
	"image_id" varchar NOT NULL,
	"image_label" varchar NOT NULL,
	"user_choice" varchar NOT NULL,
	"correct" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	"total_responses" bigint NOT NULL,
	"correct_real" bigint NOT NULL,
	"incorrect_real" bigint NOT NULL,
	"correct_ai" bigint NOT NULL,
	"incorrect_ai" bigint NOT NULL
);
