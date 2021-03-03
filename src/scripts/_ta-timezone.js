window.taTimezone = function () {
    return {
        show: false,
        time: 0,
        local_date: '',
        user_date: '',
        user_locale: '',
        breaks: [],
        morning: false,
        day: false,
        evening: false,
        night: false,
        options: {
            timezone: 'America/Los_Angeles',
            locale: 'en-US',
            start: '9',
            end: '23',
            breaks: 'sa,su',
        },
        init() {
            this.user_locale = navigator.language || navigator.userLanguage;

            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    if (isNaN(value)) {
                        this.options[key] = value;
                    } else {
                        this.options[key] = parseInt(value);
                    }
                }
            }

            const breaks = this.options.breaks.split(',');
            for (let index = 0; index < breaks.length; index++) {
                switch (breaks[index]) {
                    case 'mo':
                        this.breaks.push(1);
                        break;
                    case 'tu':
                        this.breaks.push(2);
                        break;
                    case 'we':
                        this.breaks.push(3);
                        break;
                    case 'th':
                        this.breaks.push(4);
                        break;
                    case 'fr':
                        this.breaks.push(5);
                        break;
                    case 'sa':
                        this.breaks.push(6);
                        break;
                    default:
                        this.breaks.push(0);
                        break;
                }
            }
            this.checkDate();

            setInterval(() => {
                this.checkDate();
            }, 1000);
        },
        checkDate() {
            const user_date = new Date();
            const local_date = new Date(
                user_date.toLocaleString('en-US', { timeZone: this.options.timezone })
            );
            this.time = user_date.getTime();
            this.user_date = user_date.toLocaleString(this.user_locale, {
                dateStyle: 'medium',
                timeStyle: 'short',
            });
            this.local_date = local_date.toLocaleString(this.user_locale, {
                dateStyle: 'medium',
            });
            this.local_time = local_date.toLocaleString(this.user_locale, {
                timeStyle: 'short',
            });

            const local_hours = local_date.getHours();

            this.morning = false;
            this.day = false;
            this.evening = false;
            this.night = false;
            if (local_hours > 6 && local_hours < 9) {
                this.morning = true;
            } else if (local_hours >= 9 && local_hours < 17) {
                this.day = true;
            } else if (local_hours >= 17 && local_hours < 20) {
                this.day = true;
            } else {
                this.night = true;
            }

            const local_date_start = new Date(
                user_date.toLocaleString('en-US', { timeZone: this.options.timezone })
            );
            const local_date_end = new Date(
                user_date.toLocaleString('en-US', { timeZone: this.options.timezone })
            );
            local_date_start.setHours(this.options.start, 0, 0, 0);
            local_date_end.setHours(this.options.end, 0, 0, 0);
            if (this.breaks.indexOf(local_date.getDay()) !== -1) {
                return;
            }
            if (
                local_date_start.getTime() < local_date.getTime() &&
                local_date_end.getTime() > local_date.getTime()
            ) {
                this.show = true;
                return;
            }
            this.show = false;
        },
    };
};
