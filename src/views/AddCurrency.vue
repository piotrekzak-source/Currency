<template>
	<div class="rate">
		<img alt="Finance logo" src="../assets/finance.png" />

		<h1>Add currency</h1>

		<div id="v-model-select" class="selectlist">
			<label class="currencylabel"><b>Currency</b></label>
			<select v-model="selected" class="select-currency">
				<option disabled value="">Please select one</option>
				<option>EUR</option>
				<option>USD</option>
				<option>GBP</option>
			</select>
			<br /><br />
			<span>Selected: {{ selected }}</span>
		</div>
		<div class="rate-field">
			<label class="ratelabel" for=""><b>Exchange Rate</b></label>
			<input class="rate" type="text" v-model="Rate" />
		</div>
		<div class="outputrate">{{ Rate }} {{ selected }}</div>
		<br /><br />
		<div class="savebutton">
			<button class="button-3">Save rate</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "rate",
	data() {
		return {
			Rate: "",
			selected: "",
		};
	},
	components: {},
	computed: {
		fullrate() {
			return this.Rate + this.selected;
		},
	},
};
</script>

<style>
.rate-field {
	margin: 10px;
	padding: 10px;
	display: inline-block;
	justify-content: center;
}

.rate {
	height: 30px;
}
.ratelabel {
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 10px;
}

.currencylabel {
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 10px;
}
.select-currency {
	margin: 10px;
	padding: 10px;
	display: inline-block;
	justify-content: center;
}

.outputrate {
	font-weight: bold;
}

/* CSS */
.button-3 {
	appearance: none;
	background-color: #2ea44f;
	border: 1px solid rgba(27, 31, 35, 0.15);
	border-radius: 6px;
	box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	padding: 6px 16px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
	box-shadow: none;
	outline: none;
}

.button-3:hover {
	background-color: #2c974b;
}

.button-3:focus {
	box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
	outline: none;
}

.button-3:disabled {
	background-color: #94d3a2;
	border-color: rgba(27, 31, 35, 0.1);
	color: rgba(255, 255, 255, 0.8);
	cursor: default;
}

.button-3:active {
	background-color: #298e46;
	box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
}
</style>
