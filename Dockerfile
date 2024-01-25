from node
RUN mkdir /resumebuilder
COPY . /resumebuilder
RUN npm install -g http-server

CMD cd /resumebuilder && http-server
