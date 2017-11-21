<template>
  <div class="survey">
    <div class="container">

      <form v-on:submit.prevent="submitSurvey" class="form-horizontal r-form">
        <fieldset>
          {{client.FirstName}}
          <h2>Safe</h2>

          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios">I am safe?</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="iamsafe" id="radios-0" value="1" v-model="survey.iamsafedata">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="iamsafe" id="radios-1" value="2" v-model="survey.iamsafedata">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="iamsafe" id="radios-2" value="3" v-model="survey.iamsafedata">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="iamsafe" id="radios-3" value="4" v-model="survey.iamsafedata">
                4
              </label>

              <div>{{ survey.iamsafedata }}</div>

            </div>
          </div>

          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios">It is important to me to be safe</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="importanttobesafe" id="radios-0" value="1" v-model="survey.importanttobesafe">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="importanttobesafe" id="radios-1" value="2" v-model="survey.importanttobesafe">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="importanttobesafe" id="radios-2" value="3" v-model="survey.importanttobesafe">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="importanttobesafe" id="radios-3" value="4" v-model="survey.importanttobesafe">
                4
              </label>
            </div>
          </div>


          <h2>Healthy</h2>

          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios">There are at least 2 adults who care about me no matter what</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="twoadultscare" id="radios-0" value="1" v-model="survey.twoadultscare">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="twoadultscare" id="radios-1" value="2" v-model="survey.twoadultscare">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="twoadultscare" id="radios-2" value="3" v-model="survey.twoadultscare">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="twoadultscare" id="radios-3" value="4" v-model="survey.twoadultscare">
                4
              </label>
            </div>
          </div>

          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios">I get health care when I need it</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="gethealthcare" id="radios-0" value="1" v-model="survey.gethealthcare">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="gethealthcare" id="radios-1" value="2" v-model="survey.gethealthcare">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="gethealthcare" id="radios-2" value="3" v-model="survey.gethealthcare">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="gethealthcare" id="radios-3" value="4" v-model="survey.gethealthcare">
                4
              </label>
            </div>
          </div>


          <h2>Productive</h2>
          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios"> I set realistic goals for my future</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="realisticgoals" id="radios-0" value="1" v-model="survey.realisticgoals">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="realisticgoals" id="radios-1" value="2" v-model="survey.realisticgoals">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="realisticgoals" id="radios-2" value="3" v-model="survey.realisticgoals">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="realisticgoals" id="radios-3" value="4" v-model="survey.realisticgoals">
                4
              </label>
            </div>
          </div>
          <!-- Multiple Radios (inline) -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios"> I am working towards my goals</label>
            <div class="col-md-4">
              <label class="radio-inline" for="radios-0">
                <input type="radio" name="towardgoals" id="radios-0" value="1" v-model="survey.towardgoals">
                1
              </label>
              <label class="radio-inline" for="radios-1">
                <input type="radio" name="towardgoals" id="radios-1" value="2" v-model="survey.towardgoals">
                2
              </label>
              <label class="radio-inline" for="radios-2">
                <input type="radio" name="towardgoals" id="radios-2" value="3" v-model="survey.towardgoals">
                3
              </label>
              <label class="radio-inline" for="radios-3">
                <input type="radio" name="towardgoals" id="radios-3" value="4" v-model="survey.towardgoals">
                4
              </label>
            </div>
          </div>

          <!-- Button -->
          <div class="form-group">

            <div class="col-md-4">
              <button id="submitsurvey" name="submitsurvey" class="btn btn-primary" v-on:click.once="submitSurvey">
                Submit Survey
              </button>
            </div>
          </div>

        </fieldset>
      </form>

    </div>


    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        client: '',
        errors: [],
        postBody: '',
        survey: {
          iamsafedata: '',
          importanttobesafe: '',
          twoadultscare: '',
          gethealthcare: '',
          realisticgoals: '',
          towardgoals: ''
        },
        selected: [], // Must be an array reference!
        safe: [{text: 'Like Me', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {
          text: 'Not ike Me',
          value: '4'
        }],
        options: [{text: 'Like Me', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {
          text: 'Not ike Me',
          value: '4'
        }]
      }
    },
    created () {
      axios.get(`http://localhost:3000/client/addhu7`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.client = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      // Pushes posts to the server when called.
      submitSurvey () {
        axios.post(`http://localhost:3000/surveyInstance`, {
          survey: this.survey
        })
          .then(response => {
            console.debug('submitted ' + this.survey)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
