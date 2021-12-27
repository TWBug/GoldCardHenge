# This script is responsible for conditionally building parts of the app in our
# netlify environment. Initially created to alleviate long build-times in the
# front-end codebase which were unrelated to content changes.

set -x  # output result of this script
main() {
    local non_content_changelist="$(git diff --name-only HEAD^ HEAD -- . ':!content/')"
    local content_changelist="$(git diff --name-only HEAD^ HEAD -- content/)"

    if [[ -n "${non_content_changelist}" ]]
    then
        echo "[BUILD] Detected non-content changes in the following files:"
        for _f in $non_content_changelist; do
            echo "        $_f"
        done
        echo "[BUILD] Running: npm run build:finder ..."
        npm run build:finder
    else
        echo "[BUILD SKIP] No changes outside of ./content"
    fi

    if [[ -n "${content_changelist}" ]]
    then
        echo "[BUILD] Detected changed content in the following files:"
        for _f in $content_changelist; do
            echo "        $_f"
        done
        echo "[BUILD] npm run build:staging ..."
    else
        echo "[BUILD] No changes to ./content. Building anyway to generate ./public dir ..."
    fi
    
    # NOTE: In the netlify env we _have to build_ hugo, otherwise the
    # git-ignored ./public directory--the directory to be deployed--will not
    # exist in netlify.
    npm run build:staging
}

main