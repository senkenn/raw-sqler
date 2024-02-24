FROM rust:1.76.0

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
WORKDIR /workspace

ARG CONTAINER_USER
RUN useradd -ms /bin/bash $CONTAINER_USER

# install wasm-pack
RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

COPY ./entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["make", "gen-wasm-for-extension"]
