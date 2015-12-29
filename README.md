# Description

This script can be run after converting mzidentML results into the pepXML format with idconvert (Proteowizard) to append each spectrum result with the lines:

	<analysis_result analysis="peptideprophet">
          <peptideprophet_result probability="0" PEP="0">
        </analysis_result>

Where the values for probability and PEP(e.g., "0") is replaced by the PSM confidence divided by 100. This makes the result file compatible with SpectraST.

# Installation instructions

Install tools:

	# on archlinux
	yaourt nodejs npm

	# on ubuntu
	sudo apt-get install nodejs npm

cd into directory with script

install node packages:

	npm install jquery formattor jsdom@3.x

edit proc.js with filenames

	node proc.js


