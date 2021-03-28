'use strict';

const {
	getMaxContinuousCount,
	getStringWidth,
	getAlignmentSize,
	getIndentSize,
	skip,
	skipWhitespace,
	skipSpaces,
	skipNewline,
	skipToLineEnd,
	skipEverythingButNewLine,
	skipInlineComment,
	skipTrailingComment,
	hasNewline,
	hasNewlineInRange,
	hasSpaces,
	isNextLineEmpty,
	isNextLineEmptyAfterIndex,
	isPreviousLineEmpty,
	getNextNonSpaceNonCommentCharacterIndex,
	makeString,
	addLeadingComment,
	addDanglingComment,
	addTrailingComment,
} = require('./util');

module.exports = {
	getMaxContinuousCount,
	getStringWidth,
	getAlignmentSize,
	getIndentSize,
	skip,
	skipWhitespace,
	skipSpaces,
	skipNewline,
	skipToLineEnd,
	skipEverythingButNewLine,
	skipInlineComment,
	skipTrailingComment,
	hasNewline,
	hasNewlineInRange,
	hasSpaces,
	isNextLineEmpty,
	isNextLineEmptyAfterIndex,
	isPreviousLineEmpty,
	getNextNonSpaceNonCommentCharacterIndex,
	makeString,
	addLeadingComment,
	addDanglingComment,
	addTrailingComment,
};
