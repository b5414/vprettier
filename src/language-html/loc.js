function locStart(node) {
	return node.sourceSpan.start.offset;
}

function locEnd(node) {
	return node.sourceSpan.end.offset;
}

export {locEnd, locStart};
