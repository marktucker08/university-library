ALTER TABLE "users" ALTER COLUMN "last_activity_date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now();