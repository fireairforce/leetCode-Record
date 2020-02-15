#! /bin/sh
#
# 可以直接使用grep去进行一个过滤

grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt