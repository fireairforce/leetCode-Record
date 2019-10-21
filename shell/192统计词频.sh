#! /bin/sh
#
grep -E -o "[a-z]+" words.txt | sort | uniq -c | sort -bk1,1nr | awk '{print $2, $1}'
