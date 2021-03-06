# build environment
FROM node:14-alpine AS build
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
RUN yarn install
# Copy app files
COPY . .
ARG REACT_APP_API_URL=$_REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ARG REACT_APP_DEMO=$_REACT_APP_DEMO
ENV REACT_APP_DEMO=$REACT_APP_DEMO
# Build the app 
RUN yarn build

# production environment
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf 
CMD ["nginx", "-g", "daemon off;"]