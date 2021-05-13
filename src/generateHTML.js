const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
                    <div class="card">
                        <div class="card header">
                            <h3>${manager.name}</h3>
                            <h4>Manager</h4>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: ${manager.id}</p>
                            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p class="office">Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `;
}

