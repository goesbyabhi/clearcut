# Use the official rembg image from Docker Hub
FROM danielgatis/rembg

# Expose the port that the application will run on
EXPOSE 7000

# Command to run when the container starts
CMD ["s", "--host", "0.0.0.0", "--port", "7000", "--log_level", "info"]
