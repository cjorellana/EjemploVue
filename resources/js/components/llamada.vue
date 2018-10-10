<template>
    <div class="container">
        <table>
            <thead>
                <th>Nombre</th>
                <th>Fecha</th>
            </thead>
            <tbody>
                <tr v-for="row in arraylistado" :key="row.nombre">   
                    <td v-text="row[0].nombre"></td>
                      <td v-text="row[0].CreationDate"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                nombre: '',
                CreationDate: '',
                arraylistado : []
            }
        },
        methods: {
            listado(){
                let me = this;
                axios.get('/aws').then(function (response) {
                    // handle success
                    //console.log(response);
                    me.arraylistado = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

            }
        }
        ,
        mounted() {
            //console.log('Component mounted.')
            this.listado();
        }
    }
</script>
