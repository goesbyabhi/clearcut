# Clearcut

Clearcut is a simple background removal tool that uses rembg to remove the background.

Built upon:-

- rembg
- NextJS
- TailwindCSS
- Shadcn
- Aceternity ui

## Installation

1. Clone the repository

```bash
git clone https://github.com/goesbyabhi/clearcut.git
```

2. Install the dependencies

```bash
bun i
```

3. Start the development server

```bash
bun run dev
```

4. Start the docker instance

```bash
docker build -t clearcut .
```

```bash
docker run -p 7000:7000 clearcut
```

## Usage/Demo

https://github.com/user-attachments/assets/53ec9eb5-d52f-439b-8001-931cc31b7032

## Examples
| Before | After |
|--------|-------|
| ![wallhaven-4dpgeg_1920x1080](https://github.com/user-attachments/assets/f8dfadaa-9f13-411f-8efd-57a52c0a6be8) | ![wallhaven-4dpgeg_1920x1080](https://github.com/user-attachments/assets/68ffb79b-d392-484b-9f37-944624dc0a05) |
| ![gunmaid](https://github.com/user-attachments/assets/9b94f16e-68d6-4f53-800e-44953785c98f) | ![gunmaid](https://github.com/user-attachments/assets/f3ecb285-06c2-4778-8e87-1559e6be446c) |

## Todo
- Add "How it works" page
- Add batch processing
- Try a different model
