"""Deliberately unsafe sample for the code-scanning rule canary.

Never deployed. The pull request that adds it is closed unmerged.
"""
import os

from flask import Flask, request

app = Flask(__name__)


@app.route("/run")
def run():
    os.system(request.args.get("cmd", ""))  # intentional py/command-line-injection (canary only)
    return "ok"
