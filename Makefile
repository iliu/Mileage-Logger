
HAML_SRC_DIR = src/haml/
HAML_SRC = $(wildcard $(HAML_SRC_DIR)*.haml)

SASS_SRC_DIR = src/sass/
SASS_OUT_DIR = css/
SASS_SRC = $(wildcard $(SASS_SRC_DIR)*.sass)
SASSTARGETS = $(patsubst $(SASS_SRC_DIR)%.sass,$(SASS_OUT_DIR)%.css,$(wildcard $(SASS_SRC_DIR)*.sass))

all: index.html SASS_OBJS

index.html: $(HAML_SRC)
	haml src/haml/layout.html.haml index.html

.SUFFIXES: .css .sass

$(SASS_OUT_DIR)%.css : $(SASS_SRC_DIR)%.sass
	sass $< $@

.PHONY : SASS_OBJS
SASS_OBJS : $(SASSTARGETS)
