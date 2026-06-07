# 1. Base Image: Internet se official Node.js lightweight alpine image uthao
FROM node:18-alpine

# 2. Working Directory: Container ke andar ka folder setup karo
WORKDIR /usr/src/app

# 3. Code Copy: Humare laptop ka code container ke andar copy karo
COPY server.js .

# 4. Port Expose: Container ka port 3000 network ke liye open karo
EXPOSE 3000

# 5. Run Command: Container start hote hi jo command chalani hai
CMD ["node", "server.js"]
