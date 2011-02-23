
HAML_SRC_DIR = src/haml/
HAML_SRC = $(wildcard $(HAML_SRC_DIR)*.haml)

all: index.html

index.html: $(HAML_SRC)
	haml src/haml/layout.html.haml index.html
