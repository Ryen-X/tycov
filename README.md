# TYCOV: Test Your Cognitive Vision

**TYCOV** is an open-source web application for studying how humans distinguish between AI-generated and real images. It is designed for reproducible Human–Computer Interaction (HCI) and AI perception experiments, with transparent data collection, ethical compliance, and reproducible analysis.

---

## Project Overview

* **Deployment duration**: 55 weeks
* **Participants**: 1,217 unique users
* **Responses collected**: 60,123 responses recorded
* **Open science**: Fully open-source and reproducible

---

## Key Features

* Web-based, mobile-friendly user interface (Next.js + Tailwind CSS)
* Randomized and controlled image presentation
* Integrated authentication and storage with **Supabase**
* Schema management with **Drizzle ORM**
* Consent process with anonymized logging (no PII stored)

---

## Installation & Quickstart

### Prerequisites

* Node.js (>=20)
* Supabase project (Run the following queries)
```
-- Create the responses table
CREATE TABLE "responses" (
    "response_id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_session" TEXT NOT NULL,
    "image_id" TEXT NOT NULL,
    "image_label" TEXT NOT NULL,
    "user_choice" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL,

    CONSTRAINT "responses_pkey" PRIMARY KEY ("response_id")
);

-- Create the stats table
CREATE TABLE "stats" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_responses" BIGINT NOT NULL,
    "correct_real" BIGINT NOT NULL,
    "incorrect_real" BIGINT NOT NULL,
    "correct_ai" BIGINT NOT NULL,
    "incorrect_ai" BIGINT NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("id")
);

-- Insert initial stats row
INSERT INTO "stats" ("total_responses", "correct_real", "incorrect_real", "correct_ai", "incorrect_ai") VALUES (0, 0, 0, 0, 0);

```

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/ryen-x/tycov.git
cd tycov
npm install --legacy-peer-deps
```

Set environment variables in `.env`.

```
NEXT_PUBLIC_ADMIN_PASSWORD=password123
NEXT_PUBLIC_SUPABASE_URL=https://yoursupabaseurl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=youranonkey123
GITHUB_TOKEN=github_pat_yourgithubtoken123
DATABASE_URL="postgresql://postgres.yourdb:pwd123@dblocation.supabase.com:6543/postgres"
REPO_BRANCH=your-branch-name
GITHUB_USERNAME=your-github-username
GITHUB_REPO=your-img-repo
```

Run the development server:

```bash
npm run dev
```

Visit: `http://localhost:3000/admin/`
Login to the admin panel by entering the password you setup in your .env
Click on 'Generate Manifest' to fetch images from your image/asset repository. 
---

## Data & Ethics

* All participants provided informed consent.
* No personally identifiable information (PII) was collected.
* A small **sample dataset** is provided below to demonstrate how it should look like in the database.

| response_id | timestamp           | user_session                           | image_id                                          | image_label | user_choice | correct |
|-------------|---------------------|----------------------------------------|---------------------------------------------------|-------------|-------------|---------|
| 1           | 2024-07-06 00:11:40 | 32b9d0a0-ccef-4a11-8296-03d7940486bc   | /api/image/output-webp/real/cgrnh4v563.webp       | real        | real        | TRUE    |
| 2           | 2024-07-26 00:31:51 | 3ea6055b-2c94-4b72-aa27-e197aec7c4d9   | /api/image/output-webp/real/auto_000028.webp      | real        | ai          | FALSE   |
| 3           | 2024-07-06 00:58:11 | a4e304d6-1f19-4edc-b31e-4eec9f848221   | /api/image/output-webp/real/auto_000054.webp      | real        | ai          | FALSE   |
| 4           | 2024-07-06 00:59:52 | b7401621-c788-4c41-a398-c1d588471a9f   | /api/image/output-webp/ai/000084.webp             | ai          | ai          | TRUE    |
| 5           | 2024-07-06 01:14:48 | 4f75471e-be1d-4bf5-bf7d-1a9439c71d0b   | /api/image/output-webp/ai/000013.webp             | ai          | real        | FALSE   |

---

## Reproducibility

Please note that the images are hosted in a separate GitHub repository: [TYCOV-img](https://github.com/ryen-x/tycov-img/).  
This means you need **two GitHub repositories** set up beforehand: one for the web app, and one for the images dataset.

Before deploying the application, ensure that you have successfully generated `manifest.json` for your image dataset.  
To generate `manifest.json`:

1. Start the local development server (`npm run dev`).  
2. Visit the `/admin` page.  
3. Click on 'Generate Manifest' button and a `manifest.json` file will be created in the root of the folder.  

This file is necessary for the website to correctly render the images.

---

## Testing & Verification

This project does not yet include a full automated test suite.  
However, reproducibility and verification are supported through:

1. **Sample dataset** is provided in this README.md to demonstrate the database schema and data structure.  
2. **Manual reproducibility steps** - outlined in the Installation & Quickstart section, allowing reviewers to set up the application locally and confirm correct behavior.  
3. **Smoke testing** - once the server is running (`npm run dev`), reviewers can visit `http://localhost:3000`, interact with the image classification interface, and confirm that responses are logged correctly into the `responses` table.  

Future work will extend this project with automated smoke tests and CI workflows for improved long-term maintainability.

---

## License

This project is released under the **MIT License** (see `LICENSE`).

---

## Contributing

Contributions are welcome!

1. Star the repository
2. Fork the repository
3. Create a feature branch
4. Commit changes after testing
5. Submit a pull request

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

---

## Author

* **Aaryan Singh** - Independent Researcher

---

## Contact

For questions or issues:
* Email: [aaryan724singh@gmail.com](mailto:aaryan724singh@gmail.com)



