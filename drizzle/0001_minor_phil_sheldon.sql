CREATE TABLE "seen_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_session" varchar NOT NULL,
	"image_id" varchar NOT NULL,
	"timestamp" timestamp DEFAULT now()
);
