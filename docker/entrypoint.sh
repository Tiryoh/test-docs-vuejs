#!/bin/bash
set -e

export SHELL=/bin/bash

if [ $# -gt 1 ]; then
    echo $@ | /bin/bash -li
else
    exec bash -li -c "$@"
fi
