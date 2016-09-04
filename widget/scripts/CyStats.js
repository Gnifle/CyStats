var CyStats =   {

	battery: {

		/**
		 * Returns the current battery percentage.
		 * @returns int The current battery percentage as raw number.
		 */
		percent: function() {
			return [IS2System batteryPercent];
		},

		/**
		 * Returns the used amount of battery percentage.
		 * @returns int The amount of used battery as percentage.
		 */
		percentUsed: function() {
			return 100 - [IS2System batteryPercent];
		},

		/**
		 * Returns the current battery state as a predefined string.
		 * @returns string  The current state of the battery.
		 */
		state: function() {
			return [IS2System batterState];
		},

		/**
		 * Returns the current battery state as an integer.
		 * @returns int The current state of the battery, represented
		 *              as in integer.
		 */
		stateAsInteger: function() {
			return [IS2System batterStateAsInteger];
		}

	},
	
	datetime: {
		
		current: {
			
			date: function( getAsString ) {
				
				var dateTime =  new Date();
				var now      =  {
					day:        dateTime.getDate(),
					dayLeadZ:   dateTime.getDate() > 9 ? dateTime.getDate() : '0' + dateTime.getDate(),
					dayName:    dayNames[ dateTime.getDay() ],
					month:      dateTime.getMonth() + 1,
					monthLeadZ: dateTime.getMonth() + 1 > 9 ? dateTime.getMonth() + 1 : '0' + ( dateTime.getDate() + 1 ),
					monthName:  monthNames[ dateTime.getMonth() ],
					year:       dateTime.getYear(),
				};
				debug( now );
				
				if( getAsString === true ) {
					return now.day + '.' + now.month + '.' + now.year;
				}
				return now;
				
			},
			
			time: function( getAsString ) {
				
			},
			
			toString: function() {
				return 'String of datetime';
			}
			
		},
		
		date: {},
		
		time: {},
		
	},

	memory: {

		/**
		 * Returns the amount of free RAM in Megabytes unless otwerwise
		 * specified in the format string.
		 * @param string format (Optional) The desired format to get the
		 *                      free RAM in. Available options:
	 *                          'B'     =   Bytes
	 *                          'KB'    =   Kilobytes
	 *                          'MB'    =   Megabytes
		 *
		 * @returns int The amount of free RAM available
		 */
		ramFree: function( format ) {

			if( format && format != null ) {

				var ramFreeMB   =   [IS2System ramFree];

				switch( format.toLowerCase() ) {
					case 'b':
						return ramFreeMB / 1000000;
					case 'kb':
						return ramFreeMB / 1000;
					default:
						return ramFreeMB;
				}

			}

		},

		/**
		 * Returns the amount of used RAM in Megabytes unless otwerwise
		 * specified in the format string.
		 * @param string format (Optional) The desired format to get the
		 *                      used RAM in. Available options:
	 *                          'B'     =   Bytes
	 *                          'KB'    =   Kilobytes
	 *                          'MB'    =   Megabytes
		 *
		 * @returns int The amount of used RAM available
		 */
		ramUsed: function( format ) {

			if( format && format != null ) {

				var ramUsedMB   =   [IS2System ramUsed];

				switch( format.toLowerCase() ) {
					case 'b':
						return ramUsedMB / 1000000;
					case 'kb':
						return ramUsedMB / 1000;
					default:
						return ramUsedMB;
				}

			}

		},

		/**
		 * Returns the amount of available RAM in Megabytes unless
		 * otwerwise specified in the format string.
		 * @param string format (Optional) The desired format to get the
		 *                      available RAM in. Available options:
	 *                          'B'     =   Bytes
	 *                          'KB'    =   Kilobytes
	 *                          'MB'    =   Megabytes
		 *
		 * @returns int The amount of available RAM
		 */
		ramAvailable: function( format ) {

			if( format && format != null ) {

				var ramAvailableMB   =   [IS2System ramAvailable];

				switch( format.toLowerCase() ) {
					case 'b':
						return ramAvailableMB / 1000000;
					case 'kb':
						return ramAvailableMB / 1000;
					default:
						return ramAvailableMB;
				}

			}

		},

	},

	cpu: {

		/**
		 * Returns the percentage amount of CPU usage.
		 * @returns float   Decimal percentage of CPU currently used
		 */
		percentUsed: function() {
			return [IS2System cpuUsage];
		},

		/**
		 * Returns the amount of free disk space in Megabytes unless
		 * otwerwise specified in the format string.
		 * @param string format (Optional) The desired format to get the
		 *                      free disk space in. Available options:
	 *                          'B'     =   Bytes
	 *                          'KB'    =   Kilobytes
	 *                          'MB'    =   Megabytes
	 *                          'GB'    =   Gigabytes
		 *
		 * @returns float | boolean The amount of free disk space
		 *                          available. False if given a wrong
		 *                          format or insuccessful.
		 */
		freeDiskSpace: function( format ) {

			if( format && format != null ) {

				switch( format.toLowerCase() ) {
					case 'b':
						return [IS2System freeDiskSpaceInFormat:0];
					case 'kb':
						return [IS2System freeDiskSpaceInFormat:1];
					case 'mb':
						return [IS2System freeDiskSpaceInFormat:2];
					case 'gb':
						return [IS2System freeDiskSpaceInFormat:3];
					default:
						break;
				}

			}
			return false;

		}

	},

	network: {

	/**
	 * Gives the current up speed of the user’s network connection.
	 * @returns float   The current up speed of the current
	 *                  network connection.
	 */
	speedUp: function() {
		return [IS2System networkSpeedUp];
	},

	/**
	 * Gives the current down speed of the user’s network connection.
	 * @returns float   The current down speed of the current
	 *                  network connection.
	 */
	speedDown: function() {
		return [IS2System networkSpeedDown];
	}

},

	device: {

	/**
	 * Gives the device type, eg iPhone, iPad or iPod.
	 * @returns string  The device type.
	 */
	type: function() {
		return [IS2System deviceType];
	},

	/**
	 * Gives the exact model of the current device, e.g.
	 * 'iPhone7,2'.
	 * @returns string  The exact model and type of device.
	 */
	model: function() {
		return [IS2System deviceModel];
	},

	/**
	 * Gives the height of the device’s display in points. This
	 * does not change if the device is rotated.
	 * @returns int The display height of the device in points.
	 */
	displayHeight: function() {
		return [IS2System deviceDisplayHeight];
	},

	/**
	 * Gives the width of the device’s display in points. This
	 * does not change if the device is rotated.
	 * @returns int The display width of the device in points.
	 */
	displayWidth: function() {
		return [IS2System deviceDisplayWidth];
	},

	/**
	 * Gives whether the user is using their device in 24 hour
	 * time, or in 12 hour time.
	 * @returns boolean Whether the device is in 24 hour clock
	 *                  mode or not.
	 */
	isDeviceIn24Time: function() {
		return [IS2System isDeviceIn24Time];
	}

},

	tasks: {

		/**
		 * Takes a screenshot of the current screen, and saves it
		 * in the user’s photos.
		 */
		takeScreenshot: function() {
			[IS2System takeScreenshot];
		},

		/**
		 * Locks the device.
		 */
		lockDevice: function() {
			[IS2System lockDevice]
		},

		/**
		 * Opens the application switcher.
		 */
		openSwitcher: function() {
			[IS2System openSwitcher];
		},

		/**
		 * Launches a given application to the foreground.
		 * @param string bundle The bundle string for the application
		 * to open, e.g. 'com.apple.Music'.
		 */
		openApplication: function(bundle) {
			[IS2System openApplication
			:
			bundle
			]
			;
		},

		/**
		 * Opens the Siri interface.
		 */
		openSiri: function() {
			[IS2System openSiri];
		},

		/**
		 * Relaunches SpringBoard immediately after calling.
		 */
		respring: function() {
			[IS2System respring];
		},

		/**
		 * Reboots the device immediately after calling.
		 */
		reboot: function() {
			[IS2System reboot];
		},

		/**
		 * Vibrates the device (triggers an audible alert instead if
		 * vibration is not available) for a given number of seconds
		 * defined by the duration variable. This respects the user
		 * setting "Vibrate on Silent" found under Sounds; no
		 * vibration will occur when this is turned off.
		 * @param float duration    The duration for the virbation
		 *                          in seconds. Defaults to 0.2
		 *                          seconds.
		 */
		vibrate: function(duration) {

			if(duration && duration != null) {
				[IS2System vibrateDeviceForTimeLength
			:
				duration
			]
				;

			} else {
				[IS2System vibrateDevice];
			}

		}

	},

	media: {

		currentlyPlaying: function() {

			var trackInfo = {
				title: [IS2Media currentTrackTitle],
				artist: '',
				album: '',
				artwork: '',
				artworkBase64: '',
				length: '',
				trackNumber: 1,
				trackNumberTotal: 14,
			};
			debug( JSON.stringify( trackInfo ) );
			
			if( trackInfo.title == 'No media playing' ) {
				return false;
			}
			return trackInfo;

		}

	},

	subscribe: {
		
		clock: function( callback ) {
			
			if( typeof callback === "function" ) {
				setInterval( window[callback], 1000 );
			}
			
		},

		mediaChange: function( bundle, callback ) {

			if( bundle && bundle != null ) {

				[IS2Media registerForNowPlayingNotificationsWithIdentifier:"com.test.gnifle" andCallback:^ void () {
					debug( 'Are you a callback?' );
					if( typeof callback === "function" ) {
						debug( 'Callback maybe?' );
						window[callback]();
					}
				}];

				cystatsListeners.push({
					type: 'mediaChange',
					bundle: bundle
				});

			}

		}

	}

};

var cystatsListeners = [];
window.onunload = function() {
	debug( cystatsListeners );

	for( var listener in cystatsListeners ) {

		switch( listener.type ) {

			case "mediaChange":
				[IS2Media unregisterForNotificationsWithIdentifier:"com.test.gnifle"];
				break;
			default:
				break;
		}

	}

	return null;

}

var debug = function( entry ) {
	if( true ) {
		document.getElementById('debug').innerHTML += '<br>' + JSON.stringify( entry );
	}
}

window.onerror = function(e) {
	debug(e);
}

var dayNames    =   ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames  =   ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];